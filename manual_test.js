import { getContent } from './src/railcontent';

(async function init() {
    const { response, error } = await getContent({
        url: 'https://staging.musora.com',
        brand: 'pianote',
        included_types: ['course'],
    });

    if (error) {
        return console.log(error);
    }

    return console.log(response.data);
}());
