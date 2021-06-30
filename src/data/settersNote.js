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

export const setEditNote = (editItem, id) => {
    let result = data.map((el, index) => {
        if (index == id) {
            el.name = editItem.name;
            el.content = editItem.content;
            el.category = editItem.category;
            el.dates = `${el.created.split(' ').join('/')}, ${editItem.created.split(' ').join('/')}`;
            el.created = editItem.created;
            data[index] = el;
        }
    });
    initNotes(data);
};