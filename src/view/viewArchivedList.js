import { removeArchivedNote } from '../actions/removeNote.js';
import { unarchivedNote } from '../actions/archivedNote.js';
import { archivedData } from '../data/settersNote.js';

const viewArchive = document.getElementById('archived');
const showBtn = document.getElementById('showArchiveBtn');
const unshowBtn = document.getElementById('unshowArchiveBtn');
const activeList = document.getElementById("archived-list");

showBtn.addEventListener('click', () => {
    initArchivedNotes(archivedData);
    viewArchive.className = 'archived active';
});

unshowBtn.addEventListener('click', () => {
    viewArchive.className = 'archived unactive';
});

export const initArchivedNotes = (notes) => {
    const className ="archived-list_item";
    const elementsList = notes.map((el, index) => {
        return `<div class="${className}" id="${el.id}">
            <span class="${el.category.icon}"></span>
            <input value="${el.name}" readonly/>
            <span>${el.created}</span>
            <input value="${el.category.name}" readonly/>
            <input value="${el.content}" readonly/>
            <span>${el.dates}</span>
            <div class="active-list_item__btn-block">
                <span class="fas fa-upload"></span>
                <span class="far fa-trash-alt"></span>
            </div>
        </div>`
    });
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
    const archivedBtn = document.getElementsByClassName("fas fa-upload");
    for (let btn of removeBtn) {
        btn.addEventListener('click', () => removeArchivedNote(btn));
    }
    for (let btn of archivedBtn) {
        btn.addEventListener('click', () => unarchivedNote(btn));
    }
}
