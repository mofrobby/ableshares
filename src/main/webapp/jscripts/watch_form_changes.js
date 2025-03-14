/* watch_form_changes.js */
$(document).ready(function () {	
    var $form_watch_changes,
        handle_changes = function (changed_item) {
          //console.log('something changed!');
            $form_watch_changes=$(changed_item).closest('form');
            //console.log($form_watch_changes);
            $form_watch_changes.find('input[name="sort_order"]').val(
                $form_watch_changes.find('input.sort_order_hook')
                    .map(function () {
                        return this.value;
                    })
                    .get()
                    .join()
            );
            var form_unchanged=$form_watch_changes.serialize() === $form_watch_changes.attr('data-original_form_state');
            $form_watch_changes.find('input.form_watch_submitter').attr('disabled', form_unchanged).toggleClass('disabled', form_unchanged);
        };

    $('table.sortable tbody').sortable({
        handle: '.ui-icon-grip-solid-horizontal',
        update: function (event, ui) {
            handle_changes(ui.item);
        }
    }).disableSelection();

    $('.watch_changes')
        .each(function(){
            //on load, create a string that stores the initial "state" for each form that gets watched
            $(this).attr('data-original_form_state', $(this).serialize())
        })
        .on('change', function () {
            handle_changes(this);
        })
        .find('input.form_watch_submitter').attr('disabled', true).addClass('disabled'); //default submit button to disabled now that we have attached the handle_changes() functionality

	//console.log('executed watch_form_changes.js ready() method');
});
//console.log('executed watch_form_changes.js');