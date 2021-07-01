import { setRemoveNote, setRemoveArchivedNote } from '../data/settersNote.js';

export const removeNote = (btn) => {
    const removeItem = btn.parentNode.parentNode;
    const id = removeItem.getAttribute('id');
    removeItem.remove();
    setRemoveNote(id);
};

export const removeArchivedNote = (btn) => {
    const removeItem = btn.parentNode.parentNode;
    const id = removeItem.getAttribute('id');
    removeItem.remove();
    setRemoveArchivedNote(id);
};
