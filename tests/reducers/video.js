import { expect } from '../helper';
import videoreducer from '../../src/reducers/videoreducer';
import { SET_VIDEO, SET_URL } from '../../src/actions/';

describe('Video Reducer', () => {
  it('handles action with unknown type', () => {
    expect(videoreducer(undefined, {})).to.eql({ term: '', url: null });
  });

  it('handles action of type SET_VIDEO', () => {
    const action = { type: SET_VIDEO, term: 'Chris' };
    expect(videoreducer([], action)).to.eql({ term: 'Chris'});
  });

  it('handles action of type SET_URL', () => {
    const action = { type: SET_URL, url: 'https://www.youtube.com/embed/Chris' };
    expect(videoreducer([], action)).to.eql({ url: 'https://www.youtube.com/embed/Chris'});
  });
});