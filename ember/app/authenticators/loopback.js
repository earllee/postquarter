/**
 *  @description Custom authenticator for Loopback.js
 */
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  serverTokenEndpoint: '/people/login',

  restore: function(data) {
    return;
  },

  authenticate: function(options) {
    return;
  },

  invalidate: function(data) {
    return;
  }
});
