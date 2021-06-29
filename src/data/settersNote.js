import { getDataActivList } from './getData.js';
import { initNotes } from '../view/viewActiveNotes.js';

const data = getDataActivList();

export const setCreatedNote = (note) => {
    data.push(note);
    initNotes(data);
};

export const setRemoveNote = (removeId) => {
    data.splice(removeId, 1);
    initNotes(data);
};
