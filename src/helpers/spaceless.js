/**
 *
 * @param { String } raw
 * @returns
 */
export const spaceless = (raw, holder='') => raw.replace(/ +/, holder);
