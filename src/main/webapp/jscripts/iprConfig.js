/* default presentation options to hidden; these options get shown when the user specifies the presentation type */
$('#presentation_type_content').find('div[class^="presentation_type_options_"]').hide();

$('#presentation_type_options').on('click', '.drive_content', function(e) {
   e.preventDefault();
   var $this=$(this),
       relevant_classes=$this.attr('data-toggle');
   console.log( 'relevant_classes: '+relevant_classes );

   /* show the form options relevant to the user's specified presentation type */
   $('#presentation_type_content').find('div[class^="presentation_type_options_"]')
       .not(relevant_classes).hide()
       .end().filter(relevant_classes).show();

   if( $this.is('a') ){
       /* if user chose a custom option: deselect any other previously-pressed buttons, class "Custom" button as pressed */
       console.log( $this.closest('div.btn-group').find('button.active').add('button.dropdown-toggle') );
       $this.closest('div.btn-group').find('button.active').add('button.dropdown-toggle').button('toggle');
   };
});

/*
convert select#case_id into the selected and non-selected options; we will use these arrays to build out the corresponding uls
*/
var $sort_order_directorate=$('<input type="hidden" name="sort_order_directorate" id="sort_order_directorate" value="" />'),
   $directorate_container=$('<ol id="directorate_container" />').sortable({handle: '.icon-th-list'}),
   available_case_id_options='',
   included_case_id_options='',
   $case_id=$('#case_id').remove()
       .find('optgroup').each(function(){
           $this=$(this);
           $directorate_container.append('<li><i class="icon-th-list"></i> <label class="radio inline"><input type="radio" name="directorate_id" value="'+$this.data('directorate_id')+'" />'+$this.attr('label')+'</label></li>')
       }).end()
       .find('option')
           .not(':selected').each(function(){
               var $this=$(this),
                   parent_directorate=$(this).parent('optgroup').data('directorate_id');
               available_case_id_options+='<li data-value="'+$this.attr('value')+'" class="directorate_'+parent_directorate+'"><i class="icon-th-list"></i> '+$this.html()+'</li>';
           }).end()
           .filter(':selected').each(function(){
               var $this=$(this),
                   parent_directorate=$(this).parent('optgroup').data('directorate_id');
               included_case_id_options+='<li data-value="'+$this.attr('value')+'" class="directorate_'+parent_directorate+'"><i class="icon-th-list"></i> '+$this.html()+'</li>'; 
           }),
   $available_case_id=$('<ul />', {
           id: 'available_case_id',
           class: 'related_case_id unstyled',
           title: 'These projects will not be included in this presentation'
       }).attr('aria-labeled-by', 'available_case_id_label').html(available_case_id_options),
   $included_case_id=$('<ol />', {
           id: 'included_case_id',
           class: 'related_case_id',
           title: 'These projects willbe included in this presentation'
       }).attr('aria-labeled-by', 'included_case_id_label').html(included_case_id_options);

/*
progressivley-enhance the case_id select element and surrounding divs to
   1) class case_id's div container as .span5
   2) inject two columns to the left; one for "available projects'; one for buttons to toggle selection
   3) classes the container div as .row-fluid
*/
$('#presentation_type_options_standard_case_id')
   .append( $included_case_id )
   .addClass('span5')
   .find('#included_case_id_label').append('<i class="icon-random" title="These projects can be moved and reordered"></i>').end()
   .before('<div class="span5"><label id="available_case_id_label">Available projects <i class="icon-random" title="These projects can be moved"></i></label></div><div class="span2"><input type="button" name="remove_project" id="remove_project" value="&laquo;" title="Remove included projects that are selected" class="btn" style="margin-top:40px;" /><br /><input type="button" name="add_project" id="add_project" value="&raquo;" title="Add available projects that are selected" class="btn" /></div>')
   .parent()
       .wrapInner('<div class="row-fluid" />')
       .find('div.row-fluid').before( $directorate_container )
           .siblings('#directorate_container')
               .on('change', ':radio', function(){
                   /* show/hide the li options with class that corresponds to the clicked directorate */
                   console.log( $(this).val() );
                   $('#available_case_id, #included_case_id').find('li').hide().filter('.directorate_'+$(this).val()).show();
               })
               .attr('aria-labeled-by', 'directorate_container_label').before('<label id="directorate_container_label">Business Units <i class="icon-random" title="These Business Units can be reordered"></i></label>').end().end()
       .find('#available_case_id_label').after( $available_case_id );

/* use jQuery-ui to attach dragging/sorting functionality; hide all the options initially (the directorate radio set will control hide/display of those list items moving forward) */
$( '#available_case_id, #included_case_id' ).sortable({
   handle: '.icon-th-list',
   connectWith: '.related_case_id'
}).on('click', 'li', function(){ $(this).toggleClass('selected'); }).find('li').hide();

/* #add_project moves #available_case_id>li.selected to #included_case_id  */
$('#remove_project').click(function(){
   console.log('fired');
   console.log( $('#included_case_id>li.selected:visible') );
   $('#available_case_id').append( $('#included_case_id>li.selected:visible').remove().removeClass('selected') );
});
/* #remove_project moves #included_case_id>li.selected to #available_case_id */
$('#add_project').click(function(){
   console.log('fired');
   console.log( $('#available_case_id>li.selected:visible') );
   $('#included_case_id').append( $('#available_case_id>li.selected:visible').remove().removeClass('selected') );
});

/* need:

NOTE: blue folder admin page is named: BootstrapAdmin.jsp
*/