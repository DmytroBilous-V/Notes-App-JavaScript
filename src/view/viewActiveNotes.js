import { removeNote } from '../actions/removeNote.js';

const activeList = document.getElementById("actile-list");

export const initNotes = (notes) => {
    console.log(notes)
    const className ="active-list_item";
    const elementsList = notes.map((el, index) => {
        return `<div class="${className}" id="${index}">
            <span class="${el.category.icon}"></span>
            <span>${el.name}</span>
            <span>${el.created}</span>
            <span>${el.category.name}</span>
            <span>${el.content}</span>
            <div class="active-list_item__btn-block">
                <span class="fas fa-edit"></span>
                <span class="fas fa-download"></span>
                <span class="far fa-trash-alt"></span>
            </div>
        </div>`
    });
    console.log(elementsList)
    showList(elementsList);
    setListeners();
}

function showList (elements) {
    let outHtml = '';

    for (let key in elements) {
        outHtml += elements[key];
    }

    activeList.innerHTML = outHtml;
}

function setListeners () {
    const removeBtn = document.getElementsByClassName("far fa-trash-alt");
    for (let btn of removeBtn) {
        btn.addEventListener('click', () => removeNote(btn));
    }
}
