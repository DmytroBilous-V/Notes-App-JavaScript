import {
    setArchivedNote,
    setUnarchivedNote,
    setArchivedAllNotes,
    setUnarchivedAllNotes
} from '../data/settersNote.js';

export const archivedNote = (btn) => {
    const archivedItem = btn.parentNode.parentNode;
    const id = archivedItem.getAttribute('id');
    archivedItem.remove();
    setArchivedNote(id);
};

export const unarchivedNote = (btn) => {
    const unarchivedItem = btn.parentNode.parentNode;
    const id = unarchivedItem.getAttribute('id');
    unarchivedItem.remove();
    setUnarchivedNote(id);
};

export const archivedAllActiveNotes = () => {
    setArchivedAllNotes();
};

export const unarchivedAllNotes = () => {
    setUnarchivedAllNotes();
};
