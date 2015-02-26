/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'iconic-locations',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' https://code.jquery.com https://maxcdn.bootstrapcdn.com https://cdnjs.cloudflare.com", // Allow scripts from https://code.jquery.com, https://maxcdn.bootstrapcdn.com, and https://cdnjs.cloudflare.com
    'font-src': "'self' https://maxcdn.bootstrapcdn.com https://cdnjs.cloudflare.com https://fonts.gstatic.com", // Allow fonts from https://maxcdn.bootstrapcdn.com, https://cdnjs.cloudflare.com and https://fonts.gstatic.com
    'connect-src': "'self'",
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com https://cdnjs.cloudflare.com https://fonts.gstatic.com https://fonts.googleapis.com", // Allow styles from https://maxcdn.bootstrapcdn.com, https://cdnjs.cloudflare.com and https://fonts.googleapis.com
    'media-src': "'self'"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['img-src'] += " http://lorempixel.com http://s3.amazonaws.com"; // Allow images from http://lorempixel.com and https://s3.amazonaws.com (Used for UIFaces)
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
