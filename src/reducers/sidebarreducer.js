import { TOGGLE_SIDEBAR } from '../actions/index';

const INIT_STATE = { visible : false }

export default function sidebarreducer(state=INIT_STATE, action){
	switch(action.type){
		case TOGGLE_SIDEBAR:
		return { ...state, visible : !action.visible }
	}
	return state;
}

