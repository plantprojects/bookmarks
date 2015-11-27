import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return {
            "data" : {
                "bookmarks": [
                    {
                        "id": 1,
                        "title": "PXL Bros",
                        "url": "http://pxlbros.com",
                        "thumbnail": "/images/pxlbros.jpg",
                        "description": "PXL BROS is a full-service digital agency specializing in web, mobile, social media, and application development."
                    },
                    {
                        "id": 2,
                        "title": "Sarah Bostwick artwork",
                        "url": "http://sarahbostwick.com",
                        "thumbnail": "/images/sarahbostwick.jpg",
                        "description": "Portfolio site of relief sculptures by Los Angeles based artist Sarah Bostwick"
                    }
                ]
            }
        }
    }
});
