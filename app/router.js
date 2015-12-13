import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('bookmarks', {'path': '/'}, function() {
      this.route('bookmark', { 'path': '/:bookmark_id'});
  });
  this.route('categories', {'path': '/categories'});
  this.route('app');
});

export default Router;
