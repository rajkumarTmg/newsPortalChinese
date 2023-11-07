/* eslint-disable */

const { getObjectId } = require('mongo-seeding');

module.exports = [
    {
        pageId: 'main',
        data: {
            'zh-cn': {
                featuredTopMain: [
                    getObjectId('test1')
                ],
                featuredTopSub: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredBottom: [
                    getObjectId('test1'),
                    getObjectId('test2')
                ],
                featuredBottomVote: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredRight: [
                    getObjectId('test1')
                ],
                featuredRightList: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredCommentarySection: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4'),
                    getObjectId('test5'),
                    getObjectId('test6')
                ],
                featuredVideo: [
                    getObjectId('test1Video')
                ],
                seoTitle: 'Main Page title',
                seoDescription: 'Main Page description',
                seoKeywords: 'Main Page',
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ]
            },
            'zh-tw': {
                featuredTopMain: [
                    getObjectId('test1')
                ],
                featuredTopSub: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredBottom: [
                    getObjectId('test1'),
                    getObjectId('test2')
                ],
                featuredBottomVote: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredRight: [
                    getObjectId('test1')
                ],
                featuredRightList: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredCommentarySection: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4'),
                    getObjectId('test5'),
                    getObjectId('test6')
                ],
                featuredVideo: [
                    getObjectId('test1Video')
                ],
                seoTitle: 'Main Page title',
                seoDescription: 'Main Page description',
                seoKeywords: 'Main Page',
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ]
            },
            en: {
                featuredTopMain: [
                    getObjectId('test1')
                ],
                featuredTopSub: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredBottom: [
                    getObjectId('test1'),
                    getObjectId('test2')
                ],
                featuredBottomVote: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredRight: [
                    getObjectId('test1')
                ],
                featuredRightList: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4')
                ],
                featuredCommentarySection: [
                    getObjectId('test1'),
                    getObjectId('test2'),
                    getObjectId('test3'),
                    getObjectId('test4'),
                    getObjectId('test5'),
                    getObjectId('test6')
                ],
                featuredVideo: [
                    getObjectId('test1Video')
                ],
                seoTitle: 'Main Page title',
                seoDescription: 'Main Page description',
                seoKeywords: 'Main Page',
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ]
            }
        },
        createdAt: 1668420172263,
        updatedAt: 1668420172263,
        __v: 0
    },
    {
        pageId: 'general',
        data: {
            'zh-cn': {
                headerBanner: [{"path":"/server/seeds/data/pages/images/header-bg.png","pathWebp":"/server/seeds/data/pages/images/header-bg.webp","id":"l8sum0qa"}],
                holidayBanner: [{"path":"/server/seeds/data/pages/images/article-mock.png","pathWebp":"/server/seeds/data/pages/images/article-mock.webp","id":"l8sum0qa"}],
                holiday: 'Labor Day'
            },
            'zh-tw': {
                headerBanner: [{"path":"/server/seeds/data/pages/images/header-bg.png","pathWebp":"/server/seeds/data/pages/images/header-bg.webp","id":"l8sum0qa"}],
                holidayBanner: [{"path":"/server/seeds/data/pages/images/article-mock.png","pathWebp":"/server/seeds/data/pages/images/article-mock.webp","id":"l8sum0qa"}],
                holiday: 'Labor Day'
            },
            en: {
                headerBanner: [{"path":"/server/seeds/data/pages/images/header-bg.png","pathWebp":"/server/seeds/data/pages/images/header-bg.webp","id":"l8sum0qa"}],
                holidayBanner: [{"path":"/server/seeds/data/pages/images/article-mock.png","pathWebp":"/server/seeds/data/pages/images/article-mock.webp","id":"l8sum0qa"}],
                holiday: 'Labor Day'
            }
        },
        createdAt: 1668420172263,
        updatedAt: 1668420172263,
        __v: 0
    }
];
