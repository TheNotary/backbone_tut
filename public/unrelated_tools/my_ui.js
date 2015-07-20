var MyUI = function(){
  

  this.displayNotes = function(e) {
    this.hideAllNotes();
    var notes = e.getAttribute("data-name");
    $('div.'+notes).first().removeClass('hide');
    this.changeActivenessTo(notes);
  };
  this.hideAllNotes = function() {
    $('.notes').addClass('hide');
  };
  this.removeActiveness = function() {
    $(".nav li").removeClass('active');
  };
  this.changeActivenessTo = function(targ) {
    this.removeActiveness();
    $("li."+targ).addClass("active");
  };
  
}

window.MyUI = MyUI;

MyUI.prototype.SourceCodePresenter = {
  // Pass in the selector of the content you'd like presented somewhere
  // and the selector for the html element you'd like updated with content
  linkHoverActionToPresentationOfSourceCode: function(contentSelector, renderPaneSelector) {
    // get all boxes which have text content to show/ hide
    $(contentSelector).each(function(k,v){
      // Set the selected .box to an info modal
      var box = $(this);
      box.hide();

      var trigger = v.getAttribute('data-trigger');
      // Get button/ link associated with this content, and give it show/ hide functionality
      $( '.'+trigger ).each(function(k,el) {
        $(this).mouseover(function() {
          $(renderPaneSelector).html(box.html());
          // write the content to a shown box
        }).mouseout(function() {
          box.hide();
        });
      });
      
    });
  };

};



$().ready(function() {
  MyUI.linkHoverActionToPresentationOfSourceCode('.box', '.source-view');
});



