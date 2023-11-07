/* eslint-disable */

const { getObjectId } = require('mongo-seeding');
module.exports = [
    {
        "_id":getObjectId('James'),
        "createdAt":1664806177378,
        "updatedAt":1664806177378,
        "data":{
            "zh-cn":{
                "name":"李英",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img1.png","pathWebp":"/server/seeds/data/authors/images/img1.webp","id":"l8sum0qa"}]
            },
            "zh-tw":{
                "name":"李英",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img1.png","pathWebp":"/server/seeds/data/authors/images/img1.webp","id":"l8sum0qa"}]
            },
            "en":{
                "name":"James Blunt",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img1.png","pathWebp":"/server/seeds/data/authors/images/img1.webp","id":"l8sum0qa"}]
            }
            },
        "__v":0
    },
    {
        "_id":getObjectId('Mary'),
        "createdAt":1664793047786,
        "updatedAt":1664806124354,
        "data":{
            "zh-cn":{
                "name":"李英",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img2.png","pathWebp":"/server/seeds/data/authors/images/img2.webp","id":"l8sum0qa"}]
            },
            "zh-tw":{
                "name":"李英",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img2.png","pathWebp":"/server/seeds/data/authors/images/img2.webp","id":"l8sum0qa"}]
            },
            "en":{
                "name":"Mary Smith",
                "location": "測試地點",
                "avatar":[{"path":"/server/seeds/data/authors/images/img2.png","pathWebp":"/server/seeds/data/authors/images/img2.webp","id":"l8sum0qa"}]
            }
            },
        "__v":0
    }
    ];

