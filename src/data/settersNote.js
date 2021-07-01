import {
    getDataActivList,
    getDataSummaryNotes,
    getDataArchivedList
} from './getData.js';
import { initNotes } from '../view/viewActiveNotes.js';
import { initSummaryList } from '../view/viewSummaryList.js';
import { initArchivedNotes } from '../view/viewArchivedList.js';

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

export const setRemoveAllActiveNotes = () => {
    data = [];
    initNotes(data);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setEditNote = (editItem, id) => {

    data.map((el, index) => {
        if (el.id == id) {
            el.name = editItem.name;
            el.content = editItem.content;
            el.category.name = editItem.category.name;
            el.category.icon = editItem.category.icon;
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
    initArchivedNotes(archivedData);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setArchivedAllNotes = () => {
    data.map((el, index) => {
        el.status = false;
        archivedData.push(el);
    });
    data = [];
    initNotes(data);
    initArchivedNotes(archivedData);
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
    initArchivedNotes(archivedData);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setUnarchivedAllNotes = () => {
    archivedData.map((el, index) => {
        el.status = true;
        data.push(el);
    });

    archivedData = [];

    initNotes(data);
    initArchivedNotes(archivedData);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setRemoveArchivedNote = (Id) => {
    archivedData.map((el, index) => {
        if (el.id === Id) {
            archivedData.splice(index, 1);
        }
    });

    initNotes(data);
    initArchivedNotes(archivedData);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};

export const setRemoveAllArchivedNotes = () => {
    archivedData = [];
    initNotes(data);
    initArchivedNotes(archivedData);
    initSummaryList(getDataSummaryNotes([data, archivedData]));
};