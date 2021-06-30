import { editForm } from '../view/viewFormCreate.js';
import { getValue } from './createNote.js';
import { setEditNote } from '../data/settersNote.js';

let id = null;

export const editNote = (btn) => {
    const editItem = btn.parentNode.parentNode;
    id = editItem.getAttribute('id');
    const inputsData = editItem.querySelectorAll('input');
    editForm(inputsData);
};
export function editNoteItem (form) {
    const inputsData = getValue(form);
    setEditNote(inputsData, id);
};
