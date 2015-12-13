import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["bookmark-single", "media-object", "stack-for-small"],
    tagName: "article",
    actions: {
        "saveBookmark": function(bookmark) {
            console.log('save Bookmark');
        },
        "deleteBookmark": function(bookmark) {
            console.log('delete Bookmark');
        }
    },
    bookmarkCategories: Ember.computed('bookmark', 'categories', function() {
        let categoryArray = [];

        for(let category of this.get('categories')) {
            if(this.get('bookmark.categories').indexOf(category.id) >= 0) {
                categoryArray.push(category);
            }
        }

        return categoryArray;
    })
});
