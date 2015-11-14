import DS from 'ember-data';
import config from 'postquarter/config/environment';

export default DS.JSONAPIAdapter.extend();

// export default DS.RESTAdapter.extend({
//   'host': config.apihost,
//   'namespace': config.namespace
// });
