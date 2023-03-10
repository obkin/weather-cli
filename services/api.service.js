import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (iconID) => {
    switch(iconID.slice(0, 2)) {
        case '01':
            return 'đ';
            break;
        case '02':
            return 'đ¤';
            break;
        case '03':
            return 'đĨī¸';
            break;
        case '04':
            return 'đĨī¸';
            break;
        case '09':
            return 'đ§ī¸';
            break;
        case '10':
            return 'đĻī¸';
            break;
        case '11':
            return 'đŠī¸';
            break;
        case '13':
            return 'đ¨ī¸';
            break;
        case '50':
            return 'đĢī¸';
            break;
    };
};

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Please, set the API-key first: -t [API_KEY]');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'eng',
            units: 'metric'
        }
    });
    return data;
};

export { getWeather, getIcon };