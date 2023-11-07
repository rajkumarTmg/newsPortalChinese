/* eslint-disable */

const { getObjectId } = require('mongo-seeding');
const mongoose = require('mongoose');

const description = "<p>重點獨止但管怕不。</p> <p>果低遊龍此便步是慢第好長：又面相過代笑！中顧這兩非。司生的子被辦至生老代少風係痛天從不心參沒相雙。畫愛向夜此程高總；團溫電問大記會立到兒果沒突本，時步感中車給登臺然東。</p> <p>然能式，人操是布文裡讓；親回認民遊，馬帶務料因間叫蘭山回導畫費毒官原飛知容善問，導的讓；急人的中善的積在學前不去子中打景比同學因。已數學應利點；業是當大情合果月了市我只其。</p> <p>前的法友國說男提？</p> <p>南便雖親就英清如市見因？下名中，級體興待大只：答史列場心帶我型氣，要這學上藥說，筆國策生科登就位能風目頭吃間門黃覺。頭可對一而觀強母很在第散皮連人：要情得天土名組……出景出。立下下設生不小天形求嗎活是死念明跑呢可建飛配師理終後直快……後政道；子大議子爸會重校家。電親用速，使木把響差成！境女把單世隨觀朋片上輕評專出型上設會四個女？題不實育去場家；時具優步服，影百會體，要前英……遊所來語心，後別最給於導件知那球們回傳答我三？事爭我然時在照：成議大響面，基也體學了種，走代邊家在們：市同德？</p><p>重點獨止但管怕不。</p> <p>果低遊龍此便步是慢第好長：又面相過代笑！中顧這兩非。司生的子被辦至生老代少風係痛天從不心參沒相雙。畫愛向夜此程高總；團溫電問大記會立到兒果沒突本，時步感中車給登臺然東。</p> <p>然能式，人操是布文裡讓；親回認民遊，馬帶務料因間叫蘭山回導畫費毒官原飛知容善問，導的讓；急人的中善的積在學前不去子中打景比同學因。已數學應利點；業是當大情合果月了市我只其。</p> <p>前的法友國說男提？</p> <p>南便雖親就英清如市見因？下名中，級體興待大只：答史列場心帶我型氣，要這學上藥說，筆國策生科登就位能風目頭吃間門黃覺。頭可對一而觀強母很在第散皮連人：要情得天土名組……出景出。立下下設生不小天形求嗎活是死念明跑呢可建飛配師理終後直快……後政道；子大議子爸會重校家。電親用速，使木把響差成！境女把單世隨觀朋片上輕評專出型上設會四個女？題不實育去場家；時具優步服，影百會體，要前英……遊所來語心，後別最給於導件知那球們回傳答我三？事爭我然時在照：成議大響面，基也體學了種，走代邊家在們：市同德？</p>";

module.exports = [
    {
        "_id": getObjectId('test1'),
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1",
                "title":"美参议员调查中共利用美非营利组织干预大选",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1",
                "title":"美参议员调查中共利用美非营利组织干预大选",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1",
                "title":"美参议员调查中共利用美非营利组织干预大选",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                     "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                     "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "_id": getObjectId('test2'),
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test2",
                "title":"美参议员调查中共利用美非营利组织干预大选2",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。2",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test2",
                "title":"美参议员调查中共利用美非营利组织干预大选2",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。2",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test2",
                "title":"美参议员调查中共利用美非营利组织干预大选2",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。2",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "_id": getObjectId('test3'),
        "createdAt":1664803505975,
        "updatedAt":1664803505975,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test3",
                "title":"美参议员调查中共利用美非营利组织干预大选3",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。3",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test3",
                "title":"美参议员调查中共利用美非营利组织干预大选3",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。3",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test3",
                "title":"美参议员调查中共利用美非营利组织干预大选3",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。3",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "_id": getObjectId('test4'),
        "createdAt":1664803505975,
        "updatedAt":1664803505975,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test4",
                "title":"美参议员调查中共利用美非营利组织干预大选4",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。4",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test4",
                "title":"美参议员调查中共利用美非营利组织干预大选4",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。4",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test4",
                "title":"美参议员调查中共利用美非营利组织干预大选4",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。4",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664803505975,
        "updatedAt":1664803505975,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test413",
                "title":"美参议员调查中共利用美非营利组织干预大选413",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。413",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":null
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test413",
                "title":"美参议员调查中共利用美非营利组织干预大选413",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。413",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":null
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test413",
                "title":"美参议员调查中共利用美非营利组织干预大选413",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。413",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":null
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test12345",
                "title":"美参议员调查中共利用美非营利组织干预大选12345",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test12345",
                "title":"美参议员调查中共利用美非营利组织干预大选12345",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test12345",
                "title":"美参议员调查中共利用美非营利组织干预大选12345",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test123456",
                "title":"美参议员调查中共利用美非营利组织干预大选123456",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test123456",
                "title":"美参议员调查中共利用美非营利组织干预大选123456",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test123456",
                "title":"美参议员调查中共利用美非营利组织干预大选123456",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234567",
                "title":"美参议员调查中共利用美非营利组织干预大选1234567",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234567",
                "title":"美参议员调查中共利用美非营利组织干预大选1234567",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234567",
                "title":"美参议员调查中共利用美非营利组织干预大选1234567",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。1",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test 1234568",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234568",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234568",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test 1234568",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234568",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234568",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test 1234568",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234568",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234568",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234569",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234569",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234569",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234569",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234569",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 12345698",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234569",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234569",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234569",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234570",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234570",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234570",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234570",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234570",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234570",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234570",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234570",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234570",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234571",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234571",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234571",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234571",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234571",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234571",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234571",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234571",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234571",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234572",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234572",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234572",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234572",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234572",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234572",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234572",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234572",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234572",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234573",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234573",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234573",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234573",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234573",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234573",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234573",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234573",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234573",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234574",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234574",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234574",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234574",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234574",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234574",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234574",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234574",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234574",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234575",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234575",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234575",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234575",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234575",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234575",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234575",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234575",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234575",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234576",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234576",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234576",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234576",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234576",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234576",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234576",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234576",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234576",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234577",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234577",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234577",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234577",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234577",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234577",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234577",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234577",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234577",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234578",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234578",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234578",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234578",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234578",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234578",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234578",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234578",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234578",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234579",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234579",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234579",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234579",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234579",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234579",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234579",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234579",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234579",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664806096348,
        "updatedAt":1664806096348,
        "data":{
            "zh-cn":{
                "category": getObjectId('World'),
                "alias":"test1234580",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234580",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234580",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('World'),
                "alias":"test1234580",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234580",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234580",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "description": description,
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('World'),
                "alias":"test1234580",
                "title":"美参议员调查中共利用美非营利组织干预大选 1234580",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。 1234580",
                "author": getObjectId('Mary'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test5",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test5",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test5",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test123",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
		        "photoAuthor": "94f85995c7492eec546c3218",
      		    "photoOrg": "test org",
      		    "photoDescription": "test descriprion",
      		    "photoLink": "http://localhost:3000/",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test1",
                "seoDescription":"test1",
                "seoKeywords":"test1",
                "subcategory":getObjectId('Science')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1281",
                "title": "美参议员调查中共利用美非营利组织干预大选1281",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1281",
                "title": "美参议员调查中共利用美非营利组织干预大选1281",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1281",
                "title": "美参议员调查中共利用美非营利组织干预大选1281",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1282",
                "title": "美参议员调查中共利用美非营利组织干预大选1282",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1282",
                "title": "美参议员调查中共利用美非营利组织干预大选1282",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1282",
                "title": "美参议员调查中共利用美非营利组织干预大选1282",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1283",
                "title": "美参议员调查中共利用美非营利组织干预大选1283",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1283",
                "title": "美参议员调查中共利用美非营利组织干预大选1283",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1283",
                "title": "美参议员调查中共利用美非营利组织干预大选1283",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1284",
                "title": "美参议员调查中共利用美非营利组织干预大选1284",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1284",
                "title": "美参议员调查中共利用美非营利组织干预大选1284",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1284",
                "title": "美参议员调查中共利用美非营利组织干预大选1284",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1285",
                "title": "美参议员调查中共利用美非营利组织干预大选1285",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1285",
                "title": "美参议员调查中共利用美非营利组织干预大选1285",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1285",
                "title": "美参议员调查中共利用美非营利组织干预大选1285",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test1286",
                "title": "美参议员调查中共利用美非营利组织干预大选1286",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test1286",
                "title": "美参议员调查中共利用美非营利组织干预大选1286",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test1286",
                "title": "美参议员调查中共利用美非营利组织干预大选1286",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test995",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test991",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test995",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test991",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test995",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test991",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test99123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test991",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test99123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test99123",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test99123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test99 org",
                "photoDescription": "test99 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test991",
                "seoDescription":"test991",
                "seoKeywords":"test991",
                "subcategory":getObjectId('Business')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test99124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test99124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test99124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test99125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test99125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test99125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test99126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test99126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test99126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test99127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test99127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test99127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test99128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test99128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test99128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test99 organization",
                "photoDescription": "test99 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test99 Author",
                "tags": "test991, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test99",
                "seoDescription": "test99",
                "seoKeywords": "test99",
                "hidden": false,
                "subcategory":getObjectId('Business')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test99 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test885",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test881",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test885",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test881",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test885",
                "title":"美参议员调查中共利用美非营利组织干预大选5",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。5",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test881",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt":1664803633651,
        "updatedAt":1664803633651,
        "data":{
            "zh-cn":{
                "category": getObjectId('Local'),
                "alias":"test88123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test881",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw":{
                "category": getObjectId('Local'),
                "alias":"test88123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test88123",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            },
            "en":{
                "category": getObjectId('Local'),
                "alias":"test88123",
                "title":"美参议员调查中共利用美非营利组织干预大选123",
                "shortDescription":"美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。123",
                "author": getObjectId('James'),
                "date":1664928000000,
                "description": description,
                "avatar":[{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "photoAuthor": "94f85995c7492eec546c3218",
                "photoOrg": "test88 org",
                "photoDescription": "test88 descriprion",
                "photoLink": "http://localhost:3000/",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle":"test881",
                "seoDescription":"test881",
                "seoKeywords":"test881",
                "subcategory":getObjectId('Fashion')
            }
        },
        comments: {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        likes: {
            count: 0,
            list: []
        },
        "__v":0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test88124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test88124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test88124",
                "title": "美参议员调查中共利用美非营利组织干预大选124",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。124",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test88125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test88125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test88125",
                "title": "美参议员调查中共利用美非营利组织干预大选125",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。125",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test88126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test88126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test88126",
                "title": "美参议员调查中共利用美非营利组织干预大选126",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。126",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1676351415000,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test88127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test88127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test88127",
                "title": "美参议员调查中共利用美非营利组织干预大选127",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。127",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Local'),
                "alias": "test88128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "zh-tw": {
                "category": getObjectId('Local'),
                "alias": "test88128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            },
            "en": {
                "category": getObjectId('Local'),
                "alias": "test88128",
                "title": "美参议员调查中共利用美非营利组织干预大选128",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。128",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "test88 organization",
                "photoDescription": "test88 description",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "test88 Author",
                "tags": "test881, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test88",
                "seoDescription": "test88",
                "seoKeywords": "test88",
                "hidden": false,
                "subcategory":getObjectId('Fashion')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 2,
            "list": [
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 1",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                },
                {
                    "userId": "637b6518dcffb816908c69b3",
                    "userName": "user@gmail.com",
                    "text": "test88 comment 2",
                    "createdAt": 1669273209453,
                    "_id": mongoose.Types.ObjectId(),
                    "likes": {
                        "count": 0,
                        "list": []
                    }
                }
            ]
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test21",
                "title": "美参议员调查中共利用美非营利组织干预大选21",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。21",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test21",
                "title": "美参议员调查中共利用美非营利组织干预大选21",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。21",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test21",
                "title": "美参议员调查中共利用美非营利组织干预大选21",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。21",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test22",
                "title": "美参议员调查中共利用美非营利组织干预大选22",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。22",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test22",
                "title": "美参议员调查中共利用美非营利组织干预大选22",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。22",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test22",
                "title": "美参议员调查中共利用美非营利组织干预大选22",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。22",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test23",
                "title": "美参议员调查中共利用美非营利组织干预大选23",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。23",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test23",
                "title": "美参议员调查中共利用美非营利组织干预大选23",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。23",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test23",
                "title": "美参议员调查中共利用美非营利组织干预大选23",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。23",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test24",
                "title": "美参议员调查中共利用美非营利组织干预大选24",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。24",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test24",
                "title": "美参议员调查中共利用美非营利组织干预大选24",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。24",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test24",
                "title": "美参议员调查中共利用美非营利组织干预大选24",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。24",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test25",
                "title": "美参议员调查中共利用美非营利组织干预大选25",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。25",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test25",
                "title": "美参议员调查中共利用美非营利组织干预大选25",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。25",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test25",
                "title": "美参议员调查中共利用美非营利组织干预大选25",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。25",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test26",
                "title": "美参议员调查中共利用美非营利组织干预大选26",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。26",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test26",
                "title": "美参议员调查中共利用美非营利组织干预大选26",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。26",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test26",
                "title": "美参议员调查中共利用美非营利组织干预大选26",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。26",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test27",
                "title": "美参议员调查中共利用美非营利组织干预大选27",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。27",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test27",
                "title": "美参议员调查中共利用美非营利组织干预大选27",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。27",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test27",
                "title": "美参议员调查中共利用美非营利组织干预大选27",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。27",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test28",
                "title": "美参议员调查中共利用美非营利组织干预大选28",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。28",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test28",
                "title": "美参议员调查中共利用美非营利组织干预大选28",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。28",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test28",
                "title": "美参议员调查中共利用美非营利组织干预大选28",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。28",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test29",
                "title": "美参议员调查中共利用美非营利组织干预大选29",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。29",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test29",
                "title": "美参议员调查中共利用美非营利组织干预大选29",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。29",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test29",
                "title": "美参议员调查中共利用美非营利组织干预大选29",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。29",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test290",
                "title": "美参议员调查中共利用美非营利组织干预大选290",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。290",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test290",
                "title": "美参议员调查中共利用美非营利组织干预大选290",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。290",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test290",
                "title": "美参议员调查中共利用美非营利组织干预大选290",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。290",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test291",
                "title": "美参议员调查中共利用美非营利组织干预大选291",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。291",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test291",
                "title": "美参议员调查中共利用美非营利组织干预大选291",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。291",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test291",
                "title": "美参议员调查中共利用美非营利组织干预大选291",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。291",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test292",
                "title": "美参议员调查中共利用美非营利组织干预大选292",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。292",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test292",
                "title": "美参议员调查中共利用美非营利组织干预大选292",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。292",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test292",
                "title": "美参议员调查中共利用美非营利组织干预大选292",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。292",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test31",
                "title": "美参议员调查中共利用美非营利组织干预大选31",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。31",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test31",
                "title": "美参议员调查中共利用美非营利组织干预大选31",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。31",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test31",
                "title": "美参议员调查中共利用美非营利组织干预大选31",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。31",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test32",
                "title": "美参议员调查中共利用美非营利组织干预大选32",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。32",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test32",
                "title": "美参议员调查中共利用美非营利组织干预大选32",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。32",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test32",
                "title": "美参议员调查中共利用美非营利组织干预大选32",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。32",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test33",
                "title": "美参议员调查中共利用美非营利组织干预大选33",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。33",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test33",
                "title": "美参议员调查中共利用美非营利组织干预大选33",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。33",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test33",
                "title": "美参议员调查中共利用美非营利组织干预大选33",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。33",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test34",
                "title": "美参议员调查中共利用美非营利组织干预大选34",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test34",
                "title": "美参议员调查中共利用美非营利组织干预大选34",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test34",
                "title": "美参议员调查中共利用美非营利组织干预大选34",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test341",
                "title": "美参议员调查中共利用美非营利组织干预大选341",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test341",
                "title": "美参议员调查中共利用美非营利组织干预大选341",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test341",
                "title": "美参议员调查中共利用美非营利组织干预大选341",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Health'),
                "alias": "test342",
                "title": "美参议员调查中共利用美非营利组织干预大选342",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Health'),
                "alias": "test342",
                "title": "美参议员调查中共利用美非营利组织干预大选342",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Health'),
                "alias": "test342",
                "title": "美参议员调查中共利用美非营利组织干预大选342",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。34",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test41",
                "title": "美参议员调查中共利用美非营利组织干预大选41",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。41",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test41",
                "title": "美参议员调查中共利用美非营利组织干预大选41",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。41",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test41",
                "title": "美参议员调查中共利用美非营利组织干预大选41",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。41",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test42",
                "title": "美参议员调查中共利用美非营利组织干预大选42",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。42",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test42",
                "title": "美参议员调查中共利用美非营利组织干预大选42",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。42",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test42",
                "title": "美参议员调查中共利用美非营利组织干预大选42",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。42",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test43",
                "title": "美参议员调查中共利用美非营利组织干预大选43",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。43",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test43",
                "title": "美参议员调查中共利用美非营利组织干预大选43",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。43",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test43",
                "title": "美参议员调查中共利用美非营利组织干预大选43",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。43",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test44",
                "title": "美参议员调查中共利用美非营利组织干预大选44",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。44",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test44",
                "title": "美参议员调查中共利用美非营利组织干预大选44",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。44",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test44",
                "title": "美参议员调查中共利用美非营利组织干预大选44",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。44",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test441",
                "title": "美参议员调查中共利用美非营利组织干预大选441",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。441",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test441",
                "title": "美参议员调查中共利用美非营利组织干预大选441",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。441",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test441",
                "title": "美参议员调查中共利用美非营利组织干预大选441",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。441",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Law'),
                "alias": "test442",
                "title": "美参议员调查中共利用美非营利组织干预大选442",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。442",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Law'),
                "alias": "test442",
                "title": "美参议员调查中共利用美非营利组织干预大选442",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。442",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Law'),
                "alias": "test442",
                "title": "美参议员调查中共利用美非营利组织干预大选442",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。442",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test51",
                "title": "美参议员调查中共利用美非营利组织干预大选51",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。51",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test51",
                "title": "美参议员调查中共利用美非营利组织干预大选51",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。51",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test51",
                "title": "美参议员调查中共利用美非营利组织干预大选51",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。51",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test52",
                "title": "美参议员调查中共利用美非营利组织干预大选52",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。52",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test52",
                "title": "美参议员调查中共利用美非营利组织干预大选52",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。52",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test52",
                "title": "美参议员调查中共利用美非营利组织干预大选52",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。52",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test53",
                "title": "美参议员调查中共利用美非营利组织干预大选53",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。53",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test53",
                "title": "美参议员调查中共利用美非营利组织干预大选53",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。53",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test53",
                "title": "美参议员调查中共利用美非营利组织干预大选53",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。53",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test54",
                "title": "美参议员调查中共利用美非营利组织干预大选54",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。54",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test54",
                "title": "美参议员调查中共利用美非营利组织干预大选54",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。54",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test54",
                "title": "美参议员调查中共利用美非营利组织干预大选54",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。54",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test55",
                "title": "美参议员调查中共利用美非营利组织干预大选55",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。55",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test55",
                "title": "美参议员调查中共利用美非营利组织干预大选55",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。55",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test55",
                "title": "美参议员调查中共利用美非营利组织干预大选55",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。55",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test56",
                "title": "美参议员调查中共利用美非营利组织干预大选56",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。56",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test56",
                "title": "美参议员调查中共利用美非营利组织干预大选56",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。56",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test56",
                "title": "美参议员调查中共利用美非营利组织干预大选56",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。56",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test57",
                "title": "美参议员调查中共利用美非营利组织干预大选57",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。57",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test57",
                "title": "美参议员调查中共利用美非营利组织干预大选57",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。57",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test57",
                "title": "美参议员调查中共利用美非营利组织干预大选57",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。57",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test58",
                "title": "美参议员调查中共利用美非营利组织干预大选58",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。58",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test58",
                "title": "美参议员调查中共利用美非营利组织干预大选58",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。58",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test58",
                "title": "美参议员调查中共利用美非营利组织干预大选58",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。58",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Politics'),
                "alias": "test59",
                "title": "美参议员调查中共利用美非营利组织干预大选59",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。59",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Politics'),
                "alias": "test59",
                "title": "美参议员调查中共利用美非营利组织干预大选59",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。59",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Politics'),
                "alias": "test59",
                "title": "美参议员调查中共利用美非营利组织干预大选59",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。59",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, Test2, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Culture'),
                "alias": "test62",
                "title": "美参议员调查中共利用美非营利组织干预大选62",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。62",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Culture'),
                "alias": "test62",
                "title": "美参议员调查中共利用美非营利组织干预大选62",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。62",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Culture'),
                "alias": "test62",
                "title": "美参议员调查中共利用美非营利组织干预大选62",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。62",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test63",
                "title": "美参议员调查中共利用美非营利组织干预大选63",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。63",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test63",
                "title": "美参议员调查中共利用美非营利组织干预大选63",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。63",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test63",
                "title": "美参议员调查中共利用美非营利组织干预大选63",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。63",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test64",
                "title": "美参议员调查中共利用美非营利组织干预大选64",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。64",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test64",
                "title": "美参议员调查中共利用美非营利组织干预大选64",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。64",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test64",
                "title": "美参议员调查中共利用美非营利组织干预大选64",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。64",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test65",
                "title": "美参议员调查中共利用美非营利组织干预大选65",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。65",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test65",
                "title": "美参议员调查中共利用美非营利组织干预大选65",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。65",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test65",
                "title": "美参议员调查中共利用美非营利组织干预大选65",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。65",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test66",
                "title": "美参议员调查中共利用美非营利组织干预大选66",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。66",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test66",
                "title": "美参议员调查中共利用美非营利组织干预大选66",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。66",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test66",
                "title": "美参议员调查中共利用美非营利组织干预大选66",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。66",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test67",
                "title": "美参议员调查中共利用美非营利组织干预大选67",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。67",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test67",
                "title": "美参议员调查中共利用美非营利组织干预大选67",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。67",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test67",
                "title": "美参议员调查中共利用美非营利组织干预大选67",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。67",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test68",
                "title": "美参议员调查中共利用美非营利组织干预大选68",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。68",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test68",
                "title": "美参议员调查中共利用美非营利组织干预大选68",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。68",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test68",
                "title": "美参议员调查中共利用美非营利组织干预大选68",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。68",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test69",
                "title": "美参议员调查中共利用美非营利组织干预大选69",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。69",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test69",
                "title": "美参议员调查中共利用美非营利组织干预大选69",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。69",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test69",
                "title": "美参议员调查中共利用美非营利组织干预大选69",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。69",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test690",
                "title": "美参议员调查中共利用美非营利组织干预大选690",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。690",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test690",
                "title": "美参议员调查中共利用美非营利组织干预大选690",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。690",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test690",
                "title": "美参议员调查中共利用美非营利组织干预大选690",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。690",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test691",
                "title": "美参议员调查中共利用美非营利组织干预大选691",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。691",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test691",
                "title": "美参议员调查中共利用美非营利组织干预大选691",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。691",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test691",
                "title": "美参议员调查中共利用美非营利组织干预大选691",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。691",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    {
        "createdAt": 1667297003095,
        "updatedAt": 1667374892765,
        "data": {
            "zh-cn": {
                "category": getObjectId('Cinema'),
                "alias": "test692",
                "title": "美参议员调查中共利用美非营利组织干预大选692",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。692",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "zh-tw": {
                "category": getObjectId('Cinema'),
                "alias": "test692",
                "title": "美参议员调查中共利用美非营利组织干预大选692",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。692",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            },
            "en": {
                "category": getObjectId('Cinema'),
                "alias": "test692",
                "title": "美参议员调查中共利用美非营利组织干预大选692",
                "shortDescription": "美国参议员凯利·洛夫勒（Kelly Loeffler）10月8日致信高级政府官员，呼吁调查中共利用美国非营利组织来。692",
                "author": "ef547badb8b0801d06a93155",
                "date": 1667347200000,
                "description": description,
                "avatar": [{"path":"/server/seeds/data/articles/images/test.jpg","pathWebp":"/server/seeds/data/articles/images/test.webp","id":"l8sum0qa"}],
                "photoAuthor": "ef547badb8b0801d06a93155",
                "photoOrg": "測試機構",
                "photoDescription": "測試說明",
                "photoLink": "https://www.lipsum.com/",
                "citationText": "Lorem Ipsum 只是印刷和排版行業的虛擬文本。自 1500 年代以來，Lorem Ipsum 一直是行業標準的虛擬文本",
                "citationAuthor": "測試作者",
                "tags": "Test1, test6, Test3",
                "audioTitle": "音頻標題",
                "audioFile": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "audioTitleHeader": "音頻標題",
                "audioFileHeader": [
                    {
                        "path": "/server/seeds/data/articles/files/file_example.mp3",
                        "id": "l9y1kfre"
                    }
                ],
                "seoTitle": "test",
                "seoDescription": "test",
                "seoKeywords": "test",
                "hidden": false,
                "subcategory":getObjectId('Science')
            }
        },
        "likes": {
            "count": 0,
            "list": []
        },
        "comments": {
            "count": 0,
            "list": []
        },
        "__v": 0
    },
    ];
