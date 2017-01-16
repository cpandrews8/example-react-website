import { SET_VIDEO, SET_URL } from '../actions/index';

const INIT_STATE = { term : '', url : null }

export default function videoreducer(state=INIT_STATE, action){
	switch(action.type){
		case SET_VIDEO:
		return { ...state, term : action.term }
		case SET_URL:
		return { ...state, url : action.url }
	}
	return state;
}