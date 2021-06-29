import { ACTIVE_NOTES_LIST } from '../settings/index.js';
import { parseDate } from '../settings/someFunctions.js';

export const getDataActivList = () => {
    const data = ACTIVE_NOTES_LIST.map(el => {
        el.created = parseDate(el.created);
        return el;
    });
    
    return data;
};
