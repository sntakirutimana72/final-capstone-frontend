/**
 *
 * @param { String } raw
 * @returns
 */
export const spaceless = (raw, holder = '') => raw.replace(/ +/, holder);

export const isNil = (obj) => obj === null;

export const isNilOrEmpty = (array) => isNil(array) || array.length === 0;
