const key = 'dklsajoiweu0-59apjdlkfakoppkdsja0648pjfakl';

export const storeSession = (session) => {
  localStorage.setItem(key, JSON.stringify(session));
};

export const loadSession = () => JSON.parse(localStorage.getItem(key)) || {};
