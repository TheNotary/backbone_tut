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
