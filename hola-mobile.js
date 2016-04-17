Hola = new Mongo.Collection('hola');

if (Meteor.isClient) {
  Template.main.helpers({
    hola: function(){
      return Hola.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.main.events({
    "submit .new-ads" : function(event){
      var target = event.target;
      var text = target.text.value, desc = target.description.value;
      // var fullname = target.fullname.value;
      Hola.insert({
        text: text,
        description: desc,
        //fullname: fullname,
        createdAt: new Date()
      });

      // Clear now!
      target.text.value = '';
      target.description.value = '';
      //target.fullname.value = '';

      return false; // Prevent submit
    },
    "click .delete-ad": function() {
      if (confirm('Are you sure to remove it?')) {
        Hola.remove(this._id);
      }
    }
  });
}

if (Meteor.isServer) {

}
