import Ember from 'ember';


var hasKeyword = function(keyword) {
   return function(elem) {
         return elem.name.search(keyword) !== -1;
   }
}

function filter(arr, keyword) {
   return keyword ? arr.filter(hasKeyword(keyword)) : arr;
}

var isNonEmptyArr = function(str) {
   return Ember.computed(str, function() {return Array.isArray(this.get(str)) && this.get(str).length > 0;});
}

var filterByKeyword = function(str) {
   return Ember.computed('keyword', function() {
      return filter(this.get(str), this.get("keyword"));
   })
}


export default Ember.Controller.extend({
   filteredFireExtinguishers: filterByKeyword("model.fireExtinguishers"),
   filteredAlarms: Ember.computed('keyword', function() {
      return filter(this.get("model.alarms"), this.get("keyword"));
   }),
   filteredSigns: Ember.computed('keyword', function() {
      return filter(this.get("model.signs"), this.get("keyword"));
   }),
   hasFilteredFireExtinguishers: isNonEmptyArr("filteredFireExtinguishers"),
   hasFilteredAlarms: isNonEmptyArr("filteredAlarms"),
   hasFilteredSigns: isNonEmptyArr("filteredSigns"),
   isSearching: false
   // isSearching: Ember.computed('keyword', function() {
   //    var k = this.get('keyword');
   //    return ((typeof k) === 'string') && (k.length > 0);
   // })
});
