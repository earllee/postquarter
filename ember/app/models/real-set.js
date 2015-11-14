import DS from 'ember-data';
import Set from './set';

export default Set.extend({
  workout: DS.belongsTo('workout'),
});
