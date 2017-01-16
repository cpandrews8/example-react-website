import YouTube from 'youtube-api-search';

export const TOGGLE_SIDEBAR = 'ToggleSideBar';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_URL = 'SET_URL'

const API_KEY = 'AIzaSyCH4KT8W-Ub4eBZfXi3kqjcvplrjxVGdPM';

export function toggleSideBar(visible){
	return {
		type: TOGGLE_SIDEBAR,
		visible: visible
	};
}

export function setSearchTerm(term){
	return{
		type: SET_VIDEO,
		term: term
	}
}

export function setYTURL(video){
	const videoId = video.id.videoId;
  	const YTurl = `https://www.youtube.com/embed/${videoId}`
	return{
		type: SET_URL,
		url: YTurl
	}
}