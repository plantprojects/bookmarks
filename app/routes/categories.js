import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        //return this.testService.getMovies();
        return this.modelFor("application");
    }
});
