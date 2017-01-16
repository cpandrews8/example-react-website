import { expect } from '../helper';
import { TOGGLE_SIDEBAR, SET_VIDEO, SET_URL,
		toggleSideBar, setSearchTerm, setYTURL} from '../../src/actions';


describe('actions', () => {
	describe('toggleSideBar', () => {
		it('has the correct type', () => {
			const action = toggleSideBar();
			expect(action.type).to.equal(TOGGLE_SIDEBAR);
		});

		it('has the correct payload', () => {
			const action = toggleSideBar(false);
			expect(action.visible).to.equal(false);
		});
	});

	describe('setSearchTerm', () => {
		it('has the correct type', () => {
			const action = setSearchTerm();
			expect(action.type).to.equal(SET_VIDEO);
		});

		it('has the correct payload', () => {
			const action = setSearchTerm('Chris');
			expect(action.term).to.equal('Chris');
		});
	});

	describe('setYTURL', () => {
		var video = {
				'id': {
					'videoId': 'Chris'
				}
			}

		it('has the correct type', () => {
			const action = setYTURL(video);
			expect(action.type).to.equal(SET_URL);
		});

		it('has the correct payload', () => {
			const action = setYTURL(video);
			expect(action.url).to.equal(`https://www.youtube.com/embed/${video.id.videoId}`);
		});
	});
});