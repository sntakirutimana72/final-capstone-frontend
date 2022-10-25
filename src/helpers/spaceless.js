/**
 *
 * @param { String } raw
 * @returns
 */
const spaceless = (raw, holder = '') => raw.replace(/ +/, holder);

export default spaceless;
