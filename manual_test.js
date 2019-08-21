import { putPayment } from './src/payments';
import { configure } from './index';

(async function init() {
    configure({
        baseURL: 'https://staging.musora.com',
    });

    const { response, error } = await putPayment({

    });

    if (error) {
        return console.log(error);
    }

    return console.log(response.data);
}());
