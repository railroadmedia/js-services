import { configure, getContent } from './index';

(async function init() {
    configure({
        baseURL: 'https://staging.musora.com',
    });

    const { response, error } = await getContent({
        included_types: ['song', 'play-along'],
    });

    if (error) {
        return console.log(error);
    }

    return console.log(response);
}());
