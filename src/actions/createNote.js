import { setCreatedNote } from '../data/setNote.js';
import { createDateNote, parseDate } from '../settings/someFunctions.js';

export const toggleShowForm = (element) => {
    (element.className == "note-form unActive")
    ? element.className = "note-form active"
    : element.className = "note-form unActive";
}

export function createNoteItem (e) {
    e.preventDefault();

    const inputsData = getValue(this.parentNode);

    setCreatedNote(inputsData);
    toggleShowForm(this.parentNode);
    document.getElementById('addNote').setAttribute('disabled', 'disabled');
}

function getValue(element) {
    let item = {};
    const created = createDateNote();

    const inputsValues = element.getElementsByTagName('input');
    const selectedCategory = element.getElementsByTagName('select');
    
    item.name = inputsValues[0].value;
    item.created = parseDate(created);
    item.content = inputsValues[1].value;
    item.category = {
        name: selectedCategory[0].value,
        icon: getCategoryIcon(selectedCategory[0].value)
    }
    clearInpuValue(inputsValues);
    return item;
}

function getCategoryIcon (value) {
    switch(value) {
        case "Task":
            return 'fas fa-shopping-cart';
            breack;
        case "Randon Thought":
            return 'fas fa-cogs';
            breack;
        case "Idea":
            return 'far fa-lightbulb';
            breack;
        default: 
            return 'fas fa-cogs';
            breack;
    }
}

export const clearInpuValue = (inputs) => {
    for (let input of inputs) {
        input.value = '';
    }
}
