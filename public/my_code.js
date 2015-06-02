


/*   BEGIN COLLECTIONS SECTION    */



/* Collection View Class */

var DonutCollectionView = Backbone.View.extend({
  initialize : function() {
    var that = this;
    this._donutViews = [];
 
    this.collection.each(function(donut) {
      that._donutViews.push(new UpdatingDonutView({
        model : donut,
        tagName : 'li'
      }));
    });
  },
 
  render : function() {
    var that = this;
    // Clear out this element.
    $(this.el).empty();
 
    // Render each sub-view and append it to the parent view's element.
    _(this._donutViews).each(function(dv) {
      $(that.el).append(dv.render().el);
    });
  }
});





/* Collection Instantiation */



















