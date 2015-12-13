import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return {
            "bookmarks": [
                {
                    "id": 1,
                    "title": "PXL Bros",
                    "url": "http://pxlbros.com",
                    "thumbnail": "/assets/images/pxlbros.jpg",
                    "description": "PXL BROS is a full-service digital agency specializing in web, mobile, social media, and application development.",
                    "categories": [3, 2]
                },
                {
                    "id": 2,
                    "title": "Sarah Bostwick artwork",
                    "url": "http://sarahbostwick.com",
                    "thumbnail": "/assets/images/sarahbostwick.jpg",
                    "description": "Portfolio site of relief sculptures by Los Angeles based artist Sarah Bostwick",
                    "categories": [1]
                },
                {
                    "id": 3,
                    "title": "The Property",
                    "url": "http://theproperty.gallery",
                    "thumbnail": "/assets/images/sarahbostwick.jpg",
                    "description": "Los Angeles artist run gallery project 2014-2015",
                    "categories": [1, 2]
                }
            ],
            "categories": [
                {
                    "name": "agency",
                    "id": 0
                },
                {
                    "name": "art",
                    "id": 1
                },
                {
                    "name": "javascript",
                    "id": 2
                },
                {
                    "name": "design",
                    "id": 3
                }
            ]

        }
    }
});
