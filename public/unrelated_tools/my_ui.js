var MyUI = function(){
  this.TabSwitcher = new TabSwitcher();
  this.SourceCodePresenter = new SourceCodePresenter();
};

// These functions are how we can switch what content is displayed based 
// on which tab is activated by the user
var TabSwitcher = function(){
  // call this on an elements onclick event and pass in the
  // element to have it's contents shown
  this.displayNotes = function(e) {
    hideAllNotes();
    var notes = e.getAttribute("data-name");
    $('div.'+notes).first().removeClass('hide');
    changeActivenessTo(notes);
  };
  var hideAllNotes = function() {
    $('.notes').addClass('hide');
  };
  var removeActiveness = function() {
    $(".nav li").removeClass('active');
  };
  var changeActivenessTo = function(targ) {
    removeActiveness();
    $("li."+targ).addClass("active");
  };
};

// These functions relate to rendering source code in a .box
// on mouse over of links with classes that match up with data-trigger 
// values placed elswhere which contain source code to present
var SourceCodePresenter = function(){ 
  // Pass in the selector of the content you'd like presented somewhere
  // and the selector for the html element you'd like updated with content
  this.linkHoverActionToPresentationOfSourceCode = function(contentSelector, renderPaneSelector) {
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


window.myUI = new MyUI();



$().ready(function() {
  myUI.SourceCodePresenter.linkHoverActionToPresentationOfSourceCode('.box', '.source-view');
  initEventHandlers();
});


function initEventHandlers(){
  $(".display-tab a").on("click",function(e){ myUI.TabSwitcher.displayNotes(this); });
}




