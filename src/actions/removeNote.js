import {
    setRemoveNote,
    setRemoveArchivedNote,
    setRemoveAllActiveNotes,
    setRemoveAllArchivedNotes
} from '../data/settersNote.js';

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

export const removeAllActiveNotes = () => {
    setRemoveAllActiveNotes();
}

export const removeAllArchivedNotes = () => {
    setRemoveAllArchivedNotes();
}
