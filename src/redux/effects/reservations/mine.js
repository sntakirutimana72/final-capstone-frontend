export const visibilityFilters = {
  ALL: 'SHOW_ALL',
  CONFIRMED: 'SHOW_CONFIRMED',
  DENIED: 'SHOW_DENIED',
  PENDING: 'SHOW_UNCONFIRMED',
};

const filterItems = ({ reservations, visibilityFilter }) => {
  switch (visibilityFilter) {
    case visibilityFilters.ALL:
      return reservations;
    case visibilityFilters.CONFIRMED:
      return reservations.filter(({ status }) => status === 'Confirmed');
    case visibilityFilters.DENIED:
      return reservations.filter(({ status }) => status === 'Denied');
    case visibilityFilters.PENDING:
      return reservations.filter(({ status }) => status === 'Pending');
    default:
      return null;
  }
};

const analyzeItems = ({ reservations }) => {
  const analytics = [0, 0, 0, 0];

  reservations.forEach(({ status }) => {
    analytics[0] += 1;

    switch (status) {
      case 'Confirmed':
        analytics[1] += 1;
        break;
      case 'Pending':
        analytics[2] += 1;
        break;
      case 'Denied':
        analytics[3] += 1;
        break;
      default:
        // a status that I haven't encountered for
        break;
    }
  });
  return { reservations, analytics };
};

export const getMyReserves = ({ myReserves }) => ({
  ...myReserves,
  reservations: filterItems(myReserves),
});

export const afterCancelation = (state, { payload }) => {
  const reservations = state.reservations.filter(({ id }) => id !== payload);
  return { ...state, ...analyzeItems({ reservations }) };
};

export const afterUpdate = (state, { payload }) => ({
  ...state,
  reservations: state.reservations.map(
    (item) => (item.id === payload.id ? payload : item),
  ),
});

export const onPending = (state) => ({ ...state, status: 'on' });

export const onRejected = (state, { payload }) => (
  {
    ...state, status: 'off', error: payload,
  }
);

export const onFulfilled = (state, { payload }) => ({
  ...state, ...analyzeItems({ reservations: payload }), status: 'off',
});
