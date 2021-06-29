import { toggleShowForm, createNoteItem, clearInpuValue } from '../actions/createNote.js';
import { isValidInputValue } from '../settings/someFunctions.js';
import { REG_EXP_TEXT } from '../settings/const.js';

export const toggleShowBtn = document.getElementsByClassName("create-btn");
export const createBtn = document.getElementById('addNote');

const formNote = document.getElementById('newNote');
const closeFormBtn = document.getElementById('closeForm');
const changeInput = formNote.getElementsByTagName('input');
const invalidMessage = formNote.getElementsByClassName('input_invalid-message');

let disableBtn = {
    name: false,
    content: false
}

toggleShowBtn[0].addEventListener('click', () => toggleShowForm(formNote));

closeFormBtn.addEventListener('click', () => {
    toggleShowForm(formNote);
    clearInpuValue(changeInput);
});

createBtn.addEventListener('click', createNoteItem);

changeInput[0].addEventListener('change', () => {
    console.log(changeInput[0].value)
    if (isValidInputValue(changeInput[0].value, REG_EXP_TEXT)) {
        disableBtn.name = true;
        showBtn(disableBtn);
        changeInput[0].className = "valid";
        invalidMessage[0].className = "input_invalid-message unShow";
    } else {
        changeInput[0].className = "invalid";
        invalidMessage[0].className = "input_invalid-message show";
    };
})
changeInput[1].addEventListener('change', () => {
    console.log(changeInput[1].value)
    if (isValidInputValue(changeInput[1].value, REG_EXP_TEXT)) {
        disableBtn.content = true;
        showBtn(disableBtn);
        changeInput[1].className = "valid";
        invalidMessage[1].className = "input_invalid-message unShow";
    } else {
        changeInput[1].className = "invalid";
        invalidMessage[1].className = "input_invalid-message show";
    };
})

function showBtn (data) {
    if (data.name && data.content) {
        createBtn.removeAttribute("disabled");
        disableBtn = {
            name: false,
            content: false
        }
    }
}
