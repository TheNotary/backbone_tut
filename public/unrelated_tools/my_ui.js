var MyUI = {
  displayNotes: function(e) {
    this.hideAllNotes();
    var notes = e.getAttribute("data-name");
    $('div.'+notes).first().removeClass('hide');
    this.changeActivenessTo(notes);
  },
  hideAllNotes: function() {
    $('.notes').addClass('hide');
  },
  removeActiveness: function() {
    $(".nav li").removeClass('active');
  },
  changeActivenessTo: function(targ) {
    this.removeActiveness();
    $("li."+targ).addClass("active");
    

  }

}

window.MyUI = MyUI;









$().ready(function() {
  $('.box').each(function(k,v){
    // Set the selected .box to an info modal
    var box = $(this).dialog({ modal:true, resizable:false,autoOpen: false });
    // Hide the modal
    $(this).parent().find('.ui-dialog-titlebar-close').hide();

    var trigger = v.getAttribute('data-trigger');
    // Add a mouseover event to a related element to show the box when needed
    $( '.'+trigger ).each(function(k,el) {
      $(this).mouseover(function() {
        box.dialog( "open" );
      }).mouseout(function() {
        box.dialog( "close" );
      });
    })
  });
});










