import reducer, {
  fetchOnlyMine, setVisibilityFilter, updateReservation, cancelReservation,
} from './mine';

describe('MY_RESERVATIONS', () => {
  it('setVisibilityFiter', () => {
    const initState = { visibilityFilter: 'SHOW_ALL' };
    expect(reducer(initState, setVisibilityFilter('SHOW_DENIED'))).toEqual({
      visibilityFilter: 'SHOW_DENIED',
    });
  });

  it('updateReservation', () => {
    const initState = { reservations: [{ id: 5 }] };
    expect(reducer(initState, updateReservation({ id: 5, from_date: '' }))).toEqual({
      reservations: [{ id: 5, from_date: '' }],
    });
  });

  it('cancelReservation', () => {
    const initState = { reservations: [{ id: 5 }] };
    expect(reducer(initState, cancelReservation(5))).toEqual({
      reservations: [], analytics: [0, 0, 0, 0],
    });
  });

  it('fetchOnlyMine.pending', () => {
    const initState = { status: 'idle' };
    const action = { type: fetchOnlyMine.pending.type };
    expect(reducer(initState, action)).toEqual({ status: 'on' });
  });

  it('fetchOnlyMine.fulfilled', () => {
    const initState = { reservations: null, status: 'on' };
    const action = { type: fetchOnlyMine.fulfilled.type, payload: [{ id: 1 }] };
    expect(reducer(initState, action)).toEqual({
      reservations: [{ id: 1 }], status: 'off', analytics: [1, 0, 0, 0],
    });
  });

  it('fetchOnlyMine.rejected', () => {
    const initState = { status: 'on' };
    const action = { type: fetchOnlyMine.rejected.type, payload: 'FAILED' };
    expect(reducer(initState, action)).toEqual({ status: 'off', error: 'FAILED' });
  });
});
