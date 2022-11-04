/**
 *
 * @param { String } raw
 * @returns
 */
export const spaceless = (raw, holder = '') => raw.replace(/ +/, holder);

export const isNil = (obj) => obj === null;

export const isEmpty = ({ length }) => length === 0;

export const isNilOrEmpty = (array) => isNil(array) || isEmpty(array);
