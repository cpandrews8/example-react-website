import {combineReducers} from 'redux';
import sidebarreducer from './sidebarreducer';
import videoreducer from './videoreducer';

const rootReducer = combineReducers({
	video: videoreducer,
	toggle: sidebarreducer
});

export default rootReducer;