import { setRemoveNote } from '../data/settersNote.js';

export const removeNote = (btn) => {
    const removeItem = btn.parentNode.parentNode;
    const id = removeItem.getAttribute('id');
    removeItem.remove();
    setRemoveNote(id);
};