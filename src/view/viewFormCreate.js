import { toggleShowForm, createNoteItem, clearInpuValue } from '../actions/createNote.js';
import { isValidInputValue } from '../settings/someFunctions.js';
import { REG_EXP_TEXT } from '../settings/const.js';
import { editNoteItem } from '../actions/editNote.js';

export const toggleShowBtn = document.getElementsByClassName("create-btn");
export const createBtn = document.getElementById('addNote');
const editBtn = document.getElementById('editNote');
const formNote = document.getElementById('newNote');
const closeFormBtn = document.getElementById('closeForm');
const changeInput = formNote.getElementsByTagName('input');
const invalidMessage = formNote.getElementsByClassName('input_invalid-message');
const selectInput = formNote.getElementsByTagName('select');

let disableBtn = {
    name: false,
    content: false
}

toggleShowBtn[0].addEventListener('click', () => {
    createBtn.className= "active-btn";
    editBtn.className = "unactive-btn";

    toggleShowForm(formNote);
});

closeFormBtn.addEventListener('click', () => {
    toggleShowForm(formNote);
    clearInpuValue(changeInput);
});

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleShowForm(formNote);
    createNoteItem(formNote);
    disableBtn = {
        name: false,
        content: false
    };
    showBtn(disableBtn);
});

editBtn.addEventListener('click', e => {
    e.preventDefault();
    toggleShowForm(formNote);
    editNoteItem(formNote);
    disableBtn = {
        name: false,
        content: false
    };
    showBtn(disableBtn);
});

changeInput[0].addEventListener('change', () => {
    isChengeInput({ input: changeInput[0], regexp: REG_EXP_TEXT, message: invalidMessage[0], toggle: 'name' });
})
changeInput[1].addEventListener('change', () => {
    isChengeInput({ input: changeInput[1], regexp: REG_EXP_TEXT, message: invalidMessage[1], toggle: 'content' });
})

function showBtn (data) {
    if (data.name && data.content) {
        createBtn.removeAttribute("disabled");
    } else {
        createBtn.setAttribute('disabled', "disabled");
    }
}

export function editForm (inputsData) {
    createBtn.className= "unactive-btn";
    editBtn.className = "active-btn";
    
    changeInput[0].value = inputsData[0].value;
    changeInput[1].value = inputsData[2].value;
    selectInput[0].value = inputsData[1].value;
    toggleShowForm(formNote);
}

function isChengeInput ({ ...props }) {
    if (isValidInputValue(props.input.value, props.regexp)) {
        disableBtn[props.toggle] = true;
        showBtn(disableBtn);
        props.input.className = "valid";
        props.message.className = "input_invalid-message unShow";
    } else {
        props.input.className = "invalid";
        props.message.className = "input_invalid-message show";
        disableBtn[props.toggle] = false;
        showBtn(disableBtn);
    };
}
