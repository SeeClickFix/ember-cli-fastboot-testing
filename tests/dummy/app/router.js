import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('quickstart');
    this.route('debugging');
    this.route('videos');
    this.route('html');
    this.route('document');
    this.route('status-code');
    this.route('visit');
  });

  this.route('redirects', function() {
    this.route('transition-to');
    this.route('replace-with');
  });

  this.route('query-parameters');

  this.route('request-object');

  this.route('html', function() {
    this.route('simple-valid');
    this.route('simple-invalid');
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
