import { v2 } from '@google-cloud/translate';

const translateText = new v2.Translate({ key: 'AIzaSyBjG1gc9TGe1siAzEws7V9hWAB5BsqvqhU', projectId: 'test-project-name-264614' });

export default async function (texts) {
    return Promise.all(
        texts.map((data, i) => {
            const { fieldName, text, lang } = data;

            return new Promise(resolve => {
                setTimeout(async () => {
                    const [translation] = await translateText.translate(text, lang);

                    resolve({
                        fieldName,
                        text: translation
                    });
                }, i * 100);
            });
        })
    )
        .then((translationsResult) => {
            return translationsResult;
        });
};
