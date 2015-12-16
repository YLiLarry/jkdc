import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   namespace: 'api/v1',
   buildURL: function(modelName, id, snapshot, requestType, query) {
      return this._super(modelName.replace(/^root\./,''), id, snapshot, requestType, query);
   }
});
