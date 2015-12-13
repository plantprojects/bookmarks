import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        updateBookmark(bookmark) {
            console.log(bookmark.title);
        },
        newBookmark(bookmark) {
            this.controller.set("loading", true);
            console.log(bookmark.title);
        }
    },
    loading: true,
    model: function() {
        //return this.testService.getMovies();
        return this.modelFor("application");
    }
});
