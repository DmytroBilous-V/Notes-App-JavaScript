import { initNotes } from './view/viewActiveNotes.js';
import { initSummaryList } from './view/viewSummaryList.js';
import { getDataActivList, getDataArchivedList, getDataSummaryNotes } from './data/getData.js';
import { initArchivedNotes } from './view/viewArchivedList.js';


const data = getDataActivList();

initNotes(data);
initArchivedNotes(getDataArchivedList());
initSummaryList(getDataSummaryNotes());