import { getDataActivList, getDataSummaryNotes, getDataArchivedList } from './getData.js';
import { initNotes } from '../view/viewActiveNotes.js';
import { initSummaryList } from '../view/viewSummaryList.js';

let data = getDataActivList();
export let archivedData = getDataArchivedList(); 

export const setCreatedNote = (note) => {
    data.push(note);
    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setRemoveNote = (removeId) => {
    data.map((el, index) => {
        if (el.id === removeId) {
            data.splice(index, 1);
        }
    });
    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setEditNote = (editItem, id) => {
    data.map((el, index) => {
        if (el.id == id) {
            el.name = editItem.name;
            el.content = editItem.content;
            el.category = editItem.category;
            el.dates = `${el.created.split(' ').join('/')}, ${editItem.created.split(' ').join('/')}`;
            el.created = editItem.created;
            data[index] = el;
        }
    });
    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setArchivedNote = (Id) => {
    let archivedItem;

    data.map((el, index) => {
        if (el.id === Id) {
            data.splice(index, 1);
            el.status = false;
            archivedItem = el;
        }
    });

    archivedData.push(archivedItem);
    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setUnarchivedNote = (Id) => {
    let unarchivedItem;

    archivedData.map((el, index) => {
        if (el.id === Id) {
            archivedData.splice(index, 1);
            el.status = true;
            unarchivedItem = el;
        }
    });

    data.push(unarchivedItem);
    initNotes(data);
    
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setRemoveArchivedNote = (Id) => {
    archivedData.map((el, index) => {
        if (el.id === Id) {
            archivedData.splice(index, 1);
        }
    });

    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};
