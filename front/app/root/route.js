import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
      didTransition: function() {
         this._super();
         var keyword = this.controller.get("keyword");
         if (! keyword) {
            window.scrollTo(0, 0);
         } else {
            window.scrollTo(0, 500);
         }
      }
   }
});
