import { initNotes } from './view/viewActiveNotes.js';
import { toggleShowBtn } from './view/viewFormCreate';
import { getDataActivList } from './data/getData.js';



const data = getDataActivList();

initNotes(data);
