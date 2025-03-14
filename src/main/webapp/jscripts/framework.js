//cookies.js
try{
function BeaPortalCookieManager(useIntelligentCookies, initMasterCookie)
{
    // "Public" methods
    this.setCookie = beaPortalCookieManagerSetCookie;
    this.getCookie = beaPortalCookieManagerGetCookie;
    this.deleteCookie = beaPortalCookieManagerDeleteCookie;
    this.setMasterCookie = beaPortalCookieManagerSetMasterCookie;
    this.getMasterCookie = beaPortalCookieManagerGetMasterCookie;
    this.deleteMasterCookie = beaPortalCookieManagerDeleteMasterCookie;

    // "Private" member variables
    this.useIntelligentCookies = (useIntelligentCookies ? useIntelligentCookies : true);

    // Initialization
    if (initMasterCookie)
    {
        this.setMasterCookie();
    }
}
function beaPortalCookieManagerSetCookie(name, value, expires, path, domain, secure)
{
    // If intelligent cookies are disabled or if the master cookie exists, then write the new cookie
    if (!this.useIntelligentCookies || this.getMasterCookie() == "true")
    {
        var cookie = this.getCookie(name);

        // If the cookie doesn't exist or the value has changed, write it out
        if (!cookie || cookie != value)
        {
            var cookie
                = name + "=" + escape(value)
                + (expires ? "; expires=" + expires.toGMTString() : "")
                + (path ? "; path=" + path : "")
                + (domain ? "; domain=" + domain : "")
                + (secure ? "; secure" : "");
            document.cookie = cookie;

            if (this.useIntelligentCookies)
            {
                cookie = this.getCookie(name);

                // If the cookie didn't get written (i.e. the borwser is not accepting them), delete the master cookie
                // to prevent future write attempts; this rare case could occur if the user disabled cookies mid-session
                if (!cookie || cookie != value)
                {
                    this.deleteMasterCookie();
                }
            }
        }
    }
}
function beaPortalCookieManagerGetCookie(name)
{
    var cookie = document.cookie;
    name = name + "=";
    var length = cookie.length;
    var nameBegin = 0;

    while (nameBegin < length)
    {
        var valueBegin = nameBegin + name.length;

        if (cookie.substring(nameBegin, valueBegin) == name)
        {
            var valueEnd = cookie.indexOf (";", valueBegin);

            if (valueEnd == -1)
            {
                valueEnd = length;
            }

            return unescape(cookie.substring(valueBegin, valueEnd));
        }

        nameBegin = cookie.indexOf(" ", nameBegin) + 1;

        if (nameBegin == 0)
        {
            break;
        }
    }

    return null;
}
function beaPortalCookieManagerDeleteCookie(name, path, domain)
{
    if (!this.useIntelligentCookies || this.getMasterCookie() == "true")
    {
        if (this.getCookie(name))
        {
            document.cookie = name + "="
                            + (path ? "; path=" + path : "")
                            + (domain ? "; domain=" + domain : "")
                            + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    }
}
function beaPortalCookieManagerSetMasterCookie()
{
    if (this.useIntelligentCookies)
    {
        if (this.getMasterCookie() != "true")
        {
            document.cookie = "beaPortalMasterCookie=true; path=/";
        }
    }
}
function beaPortalCookieManagerGetMasterCookie()
{
    return this.getCookie("beaPortalMasterCookie");
}
function beaPortalCookieManagerDeleteMasterCookie()
{
    if (this.useIntelligentCookies)
    {
        document.cookie = "beaPortalMasterCookie=; path=/; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
}
catch(err){}
//state.js
try{
var beaPortalClientStateManagerCount = 0;
function BeaPortalClientStateManager(namespace, expires)
{
    // "Public" methods
    this.setState = beaPortalClientStateManagerSetState;
    this.getState = beaPortalClientStateManagerGetState;
    this.containsState = beaPortalClientStateManagerContainsState;
    this.deleteState = beaPortalClientStateManagerDeleteState;
    this.listStates = beaPortalClientStateManagerListStates;
    this.clear = beaPortalClientStateManagerClear;

    // "Private" methods
    this.bundleState = beaPortalClientStateManagerBundleState;

    // "Private" member variables
    this.instanceId = ++beaPortalClientStateManagerCount;
    this.namespace = (namespace ? namespace : "beaPortalClientStateManager" + this.instanceId);
    this.expires = expires;
    this.equals = "->";
    // Switch the second ctor arg to false if the master cookie is being inited elsewhere in the app
    // (e.g. the initial app page)
    this.cookies = new BeaPortalCookieManager(true, true);
}
function beaPortalClientStateManagerSetState(state, value)
{
    this.deleteState(state);
    var cookie = this.cookies.getCookie(this.namespace);
    cookie = (cookie ? cookie : "") + this.bundleState(state, value);
    this.cookies.setCookie(this.namespace, cookie, this.expires);
}
function beaPortalClientStateManagerGetState(state)
{
    var value = null;
    var states = this.listStates();

    for (var index = 0; index < states.length; index++)
    {
        if (states[index][0] == state)
        {
            value = states[index][1];
            break;
        }
    }

    return value;
}
function beaPortalClientStateManagerContainsState(state)
{
    var result = false;
    var states = this.listStates();

    for (var index = 0; index < states.length; index++)
    {
        if (states[index][0] == state)
        {
            result = true;
            break;
        }
    }

    return result;
}
function beaPortalClientStateManagerDeleteState(state)
{
    var cookie = "";
    var states = this.listStates();

    for (var index = 0; index < states.length; index++)
    {
        if (states[index][0] != state)
        {
            cookie += this.bundleState(states[index][0], states[index][1]);
        }
    }

    if (cookie.length > 0)
    {
        this.cookies.setCookie(this.namespace, cookie, this.expires);
    }
    else
    {
        this.cookies.deleteCookie(this.namespace);
    }
}
function beaPortalClientStateManagerListStates()
{
    var states = new Array();
    var cookie = this.cookies.getCookie(this.namespace);

    if (cookie)
    {
        cookie = cookie.substring(1, cookie.length - 1);
        var properties = cookie.split("][");

        for (var index = 0; index < properties.length; index++)
        {
            var property = properties[index];
            var equalsIndex = property.indexOf(this.equals);

            if (equalsIndex >= 1 && property.length > (equalsIndex + this.equals.length))
            {
                var key = property.substring(0, equalsIndex);
                var value = property.substring(equalsIndex + this.equals.length);
                states[index] = new Array(key, value);
            }
            else
            {
                states[index] = new Array(property, null);
            }
        }
    }

    return states;
}
function beaPortalClientStateManagerClear()
{
    this.cookies.deleteCookie(this.namespace);
}
function beaPortalClientStateManagerBundleState(state, value)
{
    return "[" + state + (value ? this.equals + value : "") + "]";
}
}
catch(err){}
//delete.js
try{
function showDialogBoxNS(evt)
{
    var name = confirm("Are you sure you want to delete this portlet?")
    if(name == true)
    {
        var source = getEventSource(evt);
        var url = source.href;
        source.href = url+"&__deletePermanently=false";
        return true;
    }
    return false;
}

function showMultipleChoiceDialogBoxNS(evt)
{
    //var name = confirm("Are you sure you want to delete this portlet?")
    var name = true;
    var name1 = false;
    if(name == true)
    {
        var source = getEventSource(evt);
        var url = source.href;
        //name1 = confirm("Press OK to delete permanently \nor Cancel to only delete from this session.\n");
        name1 = true;
        if(name1 == true)
        {
            source.href = url+"&__deletePermanently=true";
        }
        else
        {
            source.href = url+"&__deletePermanently=false";
        }
        return true;
    }
    return false;
}


function showDialogBoxIE()
{
    var name = confirm("Are you sure you want to delete this portlet?")
    if(name == true)
    {
        var source;
        var event = window.event;
        if(event != null)
        {
            source = event.srcElement;
        }
        var parent = source.parentNode;
        var url = parent.href;
        parent.href = url+"&__deletePermanently=false";
    }
    else
    {
        var event = window.event;
        if(event != null)
        {
            event.returnValue = false;
        }
    }
}

function showMultipleChoiceDialogBoxIE()
{
    //var name = confirm("Are you sure you want to delete this portlet?")
    var name = true;
    var name1 = false;
    if(name == true)
    {
        var source;
        var event = window.event;
        if(event != null)
        {
            source = event.srcElement;
        }
        var parent = source.parentNode;
        var url = parent.href;
        //name1 = confirm("Press OK to delete permanently \nor Cancel to only delete from this session.\n");
        name1 = true;
        if(name1 == true)
        {
            parent.href = url+"&__deletePermanently=true";
        }
        else
        {
            parent.href = url+"&__deletePermanently=false";
        }
    }
    else
    {
        var event = window.event;
        if(event != null)
        {
            event.returnValue = false;
        }
    }
}

function detectNetscape()
{
    var n=navigator.appName
    if(n == "Netscape")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function initPortletDeleteButtons()
{
    var portletDeleteButtonsSpanned = getSpannedDeleteButtons();
    var portletDeleteButtonsNonSpanned = getNonSpannedDeleteButtons();
    if(detectNetscape() == true)
    {
        for(var i = 0; i < portletDeleteButtonsSpanned.length; i++)
        {
            portletDeleteButtonsSpanned[i].onclick = showMultipleChoiceDialogBoxNS;
        }
        for(var i = 0; i < portletDeleteButtonsNonSpanned.length; i++)
        {
            portletDeleteButtonsNonSpanned[i].onclick = showDialogBoxNS;
        }
    }
    else
    {
        for(var i = 0; i < portletDeleteButtonsSpanned.length; i++)
        {
            portletDeleteButtonsSpanned[i].onclick = showMultipleChoiceDialogBoxIE;
        }
        for(var i = 0; i < portletDeleteButtonsNonSpanned.length; i++)
        {
            portletDeleteButtonsNonSpanned[i].onclick = showDialogBoxIE;
        }
    }
}

function getSpannedDeleteButtons()
{
    var anchors = document.getElementsByTagName("a");
    var spannedDeletes = new Array(0);
    var j = -1;
    for (var i = 0; i < anchors.length; i++)
    {
        var _className = anchors[i].className;
        if((_className == "bea-portal-button-delete") &&
           (anchors[i].parentNode.tagName == "span" || anchors[i].parentNode.tagName == "SPAN"))
        {
            j++;
            spannedDeletes[j] = anchors[i];
        }
    }
    return spannedDeletes;
}

function getNonSpannedDeleteButtons()
{
    var anchors = document.getElementsByTagName("a");
    var nonSpannedDeletes = new Array(0);
    var j = -1;
    for (var i = 0; i < anchors.length; i++)
    {
        var _className = anchors[i].className;
        if((_className == "bea-portal-button-delete") &&
           (anchors[i].parentNode.tagName != "span" && anchors[i].parentNode.tagName != "SPAN"))
        {
            j++;
            nonSpannedDeletes[j] = anchors[i];
        }
    }
    return nonSpannedDeletes;
}
}
catch(err){}
//util.js
try{
function getParentByClassName(element, className)
{
    var parent = element;

    if (className)
    {
        while (parent && parent.className != className)
        {
            parent = parent.parentNode;
        }
    }

    return parent;
}

function getFirstChildByClassRegex(element, tagName, classRegex, stopClassRegex)
{
    var match;
    var child = element.firstChild;

    while (child != null && (!child.className || !child.className.match(stopClassRegex)))
    {
        if (child.tagName && child.tagName == tagName && child.className && child.className.match(classRegex))
        {
            match = child;
            break;
        }
        else
        {
            match = getFirstChildByClassRegex(child, tagName, classRegex, stopClassRegex);

            if (match)
            {
                break;
            }
        }

        child = child.nextSibling;
    }

    return match;
}

function getChildrenByClassRegex(root, classRegexes, tagName, matches)
{
    matches = (matches ? matches : new Array());

    if (root)
    {
        var child = root.firstChild;

        while (child)
        {
            if (!tagName || child.tagName == tagName)
            {
                for (index in classRegexes)
                {
                    if (child.className && child.className.match(classRegexes[index]))
                    {
                        matches[matches.length] = child;
                    }
                }
            }

            getChildrenByClassRegex(child, classRegexes, tagName, matches);
            child = child.nextSibling;
        }
    }

    return matches;
}

function addEventToElement(target, eventType, func, useCapture)
{
    var result = false;

    if (target.addEventListener)
    {
        target.addEventListener(eventType, func, useCapture);
        result = true;
    }
    else if (target.attachEvent)
    {
        result = target.attachEvent("on" + eventType, func);
    }
    else
    {
        alert("Handler could not be attached");
    }

    return result;
}

function addEventToElements(targets, eventType, func, useCapture)
{
    var result = true;

    for (var i = 0; i < targets.length; i++)
    {
        result &= addEventToElement(targets[i], eventType, func, useCapture);
    }

    return result;
}

function removeEventFromElement(target, eventType, func, useCapture)
{
    var result = false;

    if (target.removeEventListener)
    {
        target.removeEventListener(eventType, func, useCapture);
        result = true;
    }
    else if (target.detachEvent)
    {
        result = target.detachEvent("on" + eventType, func);
    }
    else
    {
        window.alert("Handler could not be removed");
    }

    return result;
}

function removeEventFromElements(targets, eventType, func, useCapture)
{
    var result = true;

    for (var i = 0; i < targets.length; i++)
    {
        result &= removeEventFromElement(targets[i], eventType, func, useCapture);
    }

    return result;
}

function getEvent(event)
{
    var evt = event;

    if (!evt)
    {
        evt = window.event;
    }

    return evt;
}

function getEventSource(event)
{
    var source;

    if (event && event.srcElement)
    {
        source = event.srcElement;
    }
    else if (event && event.currentTarget)
    {
        source = event.currentTarget;
    }
    else
    {
        window.alert("Event source not found!");
    }

    return source;
}

function getClickableImageEventSource(source)
{
    // If IE, the original source will be the image being clicked instead of the parent element that generated the event
    if (source && source.src)
    {
        source = source.parentNode;
    }

    return source;
}

/**
 * @deprecated
 */
try {
	var console = (beaPortalConsole ? beaPortalConsole : new Console());
	}
	catch(e){
	//catch and just suppress error
}
/**
 * @deprecated
 */
function Console()
{
    this.canvas = null;
    this.println = consolePrintln;
    this.show = consoleShow;
}

/**
 * @deprecated
 */
function consolePrintln(object)
{
    if (!this.canvas)
    {
        this.canvas = window.open("about:blank", "Console", "toolbar = no, width = 640, height = 480, directories = no, status = no, scrollbars = yes, resize = no, menubar = no");
    }

    this.canvas.document.write(object);
    this.canvas.document.write("<br/>");
}

/**
 * @deprecated
 */
function consoleShow(object)
{
    this.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    for (property in object)
    {
        this.println(property + " = " + eval("object." + property));
    }

    this.println("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
}
}
catch(err){}