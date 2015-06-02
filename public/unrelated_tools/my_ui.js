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
  // get all boxes which have text content to show/ hide
  $('.box').each(function(k,v){
    // Set the selected .box to an info modal
    var box = $(this);
    box.hide();

    var trigger = v.getAttribute('data-trigger');
    // Get button/ link associated with this content, and give it show/ hide functionality
    $( '.'+trigger ).each(function(k,el) {
      $(this).mouseover(function() {
        $('#source-view').html(box.html());
        // write the content to a shown box
      }).mouseout(function() {
        box.hide();
      });
    })
  });
});


