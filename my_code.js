
/* Model Definition*/

// We extend the Backbone.Model prototype to build our own
var Donut = Backbone.Model.extend({
 
  // We can pass it default values.
  defaults : {
    name : null,
    sparkles : false,
    cream_filled : false
  },
 
  url : function() {
    // Important! It's got to know where to send its REST calls.
    // In this case, POST to '/donuts' and PUT to '/donuts/:id'
    return this.id ? '/donuts/' + this.id : '/donuts';
  }
 
});

/* View Definition */

var DonutView = Backbone.View.extend({
  tagName : "div",
  className : "donut",
 
  render : function() {
    this.el.innerHTML = this.model.get('name');
 
    return this;
  }
});



/* Model Instantiation */

var bostonCream = new Donut({ // attributes passed to the Donut constructor will override the defaults
  name : "Bostan Cream",
  cream_filled : true
});

// Updating and retrieving attributes
// Actually, let's put sprinkles on that...
bostonCream.set({ sprinkles : true });

// Saving
bostonCream.save(); // this will now POST to the RESTful interface.




/* View Instantiation */

var bcDonutView = new DonutView({
  model : bostonCream
});
 
var renderedDonutElement = bcDonutView.render().el;





















