import { expect } from '../helper';
import sidebarreducer from '../../src/reducers/sidebarreducer';
import { TOGGLE_SIDEBAR } from '../../src/actions';

describe('Sidebar Reducer', () => {
  it('handles action with unknown type', () => {
    expect(sidebarreducer(undefined, {})).to.eql({ visible: false });
  });

  it('handles action of type TOGGLE_SIDEBAR', () => {
    const action = { type: TOGGLE_SIDEBAR, visible: false };
    expect(sidebarreducer([], action)).to.eql({ visible: true });
  });
});