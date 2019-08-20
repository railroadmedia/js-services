import { getContent } from './src/railcontent';
import { configure } from './index';

(async function init() {
    configure({
        baseURL: 'https://staging.musora.com',
    });

    const { response, error } = await getContent({
        brand: 'pianote',
        included_types: ['course'],
    });

    if (error) {
        return console.log(error);
    }

    return console.log(response.data);
}());
