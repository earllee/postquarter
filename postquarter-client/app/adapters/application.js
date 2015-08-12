
import DS from 'ember-data';
import config from 'postquarter-client/config/environment';

export default DS.RESTAdapter.extend({
  'host': config.apihost,
  'namespace': config.namespace
});
