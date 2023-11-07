import { CollectContent, DownloadContent, Root, Scraper } from 'nodejs-web-scraper';
import { FILES_FOLDER } from '../../../../constants';
const fs = require('fs');
const https = require('https');
const ZHENGJIAN = 'https://www.zhengjian.org';

export default async function (link) {
    const config = {
        baseSiteUrl: link,
        startUrl: link,
        filePath: `./${FILES_FOLDER}/`,
        cloneFiles: false, // Will create a new image file with an appended name, if the name already exists. Default is false.
        concurrency: 10, // Maximum concurrent jobs. More than 10 is not recommended.Default is 3.
        maxRetries: 3 // The scraper will try to repeat a failed request few times(excluding 404). Default is 5.
    };

    const scraper = new Scraper(config);// Create a new Scraper instance, and pass config to it.

    // Now we create the "operations" we need:

    const root = new Root();// The root object fetches the startUrl, and starts the process.

    // Any valid cheerio-advanced-selectors selector can be passed. For further reference: https://cheerio.js.org/
    const image = new DownloadContent('article .field--name-body img', {
        name: 'image',
        condition: (cheerioNode) => {
            let imagePath = cheerioNode[0].attribs.src.split('/').slice(-1)[0];
            const isTail = imagePath.indexOf('?itok=');

            if (isTail) {
                imagePath = imagePath.slice(0, isTail);
            }
            if (imagePath.length > 250) { // approx value for file name length chars limit for different systems, 256 on Windows, 255 on Linux
                // manually download a long name image
                // URL of the long name image
                const url = `${ZHENGJIAN}${cheerioNode[0].attribs.src}`;

                https.get(url, (res) => {
                    const [name, extension] = imagePath.split('.');
                    const shortenedName = name.slice(0, 240);
                    const newName = shortenedName + '.' + extension;
                    // Image will be stored at this path
                    const path = `${FILES_FOLDER}/${newName}`;
                    const filePath = fs.createWriteStream(path);
                    res.pipe(filePath);
                    filePath.on('finish', () => {
                        filePath.close();
                        // eslint-disable-next-line no-console
                        console.log('Download Completed');
                    });
                });
                return false;
            } else {
                return true;
            }
        }
    });// Downloads images.
    const title = new CollectContent('h1', { name: 'title' });// "Collects" the text from each H1 element.
    const subtitle = new CollectContent('article .field--name-field-subtitle', { name: 'shortDescription' });
    const description = new CollectContent('article .field--name-body', { name: 'description', contentType: 'html' });// "Collects" the the article body.
    const author = new CollectContent('article .field--name-field-author', { name: 'author' });// "Collects" the the article author.
    const date = new CollectContent('article .zj-beforebody', { name: 'date' });// "Collects" the the article date.

    // Then we create a scraping "tree":
    root.addOperation(image);
    root.addOperation(title);
    root.addOperation(subtitle);
    root.addOperation(description);
    root.addOperation(date);
    root.addOperation(author);

    await scraper.scrape(root);

    const article = root.getData();// Will return an array of all article objects(from all categories), each
    // containing its "children"(titles,stories and the downloaded image urls)

    // If you just want to get the stories, do the same with the "story" variable:
    // const stories = story.getData();

    return JSON.stringify(article);
    // Will produce a formatted JSON containing all article pages and their selected data.
}
