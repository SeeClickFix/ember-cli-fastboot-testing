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
  });

  this.route('redirects', function() {
    this.route('transition-to');
    this.route('replace-with');
  });

  this.route('query-parameters');

  this.route('request-object');
  this.route('external-request');

  this.route('not-found', { path: '/*path' });

  this.route('externals', function() {
    this.route('native-fetch-get');
    this.route('native-fetch-post');
    this.route('ember-fetch-get');
  });
});

export default Router;