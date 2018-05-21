import axios from 'axios';

const ROOT_URL = `https://api.coinmarketcap.com/v1/ticker/`;
export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(coin) {
    const url = `${ROOT_URL}${coin}/`;
    const request = axios.get(url);


    return {
        type: FETCH_PRICE,
        payload: request
    };
}
