import DS from 'ember-data';

export default DS.Model.extend({
   fireExtinguishers: DS.attr(),
   alarms: DS.attr(),
   signs: DS.attr()
});
