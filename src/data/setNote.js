import { getDataActivList } from './getData.js';
import { initNotes } from '../view/viewActiveNotes.js';

const data = getDataActivList();

export const setCreatedNote = (note) => {
    data.push(note);
    initNotes(data)
};
