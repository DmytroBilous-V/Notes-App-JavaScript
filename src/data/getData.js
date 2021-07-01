import { ACTIVE_NOTES_LIST } from '../settings/index.js';
import { parseDate } from '../settings/someFunctions.js';

const defaultData = [ACTIVE_NOTES_LIST.active, ACTIVE_NOTES_LIST.archived];

export const getDataSummaryNotes = (summaryData = defaultData) => {
    let resultItems = {};
    
    for (let data of summaryData) {
        data.map(el => {
            if (el.category.name === 'Task') {
                if (resultItems.tasks === undefined) {
                    resultItems.tasks = {
                        name: 'Task',
                        icon: '',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems.tasks.icon = el.category.icon;
                resultItems.tasks.items.push(el);
                (!el.status) ? resultItems.tasks.unactiveCount++
                : resultItems.tasks.activeCount++;
            } else if (el.category.name === 'Idea') {
                if (resultItems.ideas === undefined) {
                    resultItems.ideas = {
                        name: 'Idea',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems.ideas.icon = el.category.icon;
                resultItems.ideas.items.push(el);
                (!el.status) ? resultItems.ideas.unactiveCount += 1
                : resultItems.ideas.activeCount += 1;
            } else {
                if (resultItems.thought === undefined) {
                    resultItems.thought = {
                        name: 'Random Thought',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems.thought.icon = el.category.icon;
                resultItems.thought.items.push(el);
                (!el.status) ? resultItems.thought.unactiveCount += 1
                : resultItems.thought.activeCount += 1; 
            }
        });
    }
    return resultItems;
};

export const getDataActivList = () => {
    const data = ACTIVE_NOTES_LIST.active.map(el => {
        el.created = parseDate(el.created);
        return el;
    });
    return data;
};

export const getDataArchivedList = (data = ACTIVE_NOTES_LIST.archived) => {
    const resData = data.map(el => {
        el.created = parseDate(el.created);
        return el;
    });
    return resData;
};
