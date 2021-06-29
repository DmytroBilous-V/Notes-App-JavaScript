import { toggleShowForm, createNoteItem } from '../actions/createNote.js';


export const toggleShowBtn = document.getElementsByClassName("create-btn");
const formNote = document.getElementById('newNote');
export const createBtn = document.getElementById('addNote');

toggleShowBtn[0].addEventListener('click', () => toggleShowForm(formNote));
createBtn.addEventListener('click', createNoteItem);

