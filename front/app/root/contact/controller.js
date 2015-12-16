import Ember from 'ember';

export default Ember.Controller.extend({
   location: Ember.computed(function() {
      return [{
            imageOffset: {
               width: -46,
               height: -21
            },
            title: "天津市金凯达成消防设备有限公司",
            position: {
               lat: 39.150322,
               lng: 117.163082
            }
         }]
   })
});
