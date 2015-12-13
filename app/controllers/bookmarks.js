import Ember from 'ember';

export default Ember.Controller.extend({
    sorted : function(){
        return Ember.ArrayController.create({
         content : this.get('model.data.bookmarks')
      });
    }.property(),
    actions: {
        deleteBookmark(bookmark) {
            console.log("Delete");
            this.get("model.data.bookmarks").removeObject(bookmark);
        },
        sortBookmark(bookmark) {
            console.log("sort");
            sorted.sortBy(bookmark);
        }
    },
    categorizedBookmarks: Ember.computed('model.categories', 'model.bookmarks', function(){
            let categorized = {};
            for(let bookmark of this.get('model.bookmarks')) {
                for(category of bookmark.categories) {
                    if(categorized[category]) {
                        categorized[category].push(bookmark)
                    } else {
                        categorized[category] = [bookmark];
                    }
                }
            }

            //categorized
            /*{
                "0": [bookmark, bookmark, bookmark],
                "1": [bookmark, bookmark]
            }*/
    })
});
