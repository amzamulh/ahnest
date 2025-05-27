/**
 * Retrieves a valid style from a provided style object and validates the key.
 * @param {string} styleKey - The key to look up in the style object (e.g., 'xs' or 'primary').
 * @param {Object} styleObject - The object containing style mappings (e.g., textStyles or variantTextStyles).
 * @returns {string} - The corresponding CSS class for the valid style key.
 * @throws {Error} - If the style object is invalid or the style key doesn't exist.
 */

export const getValidStyle = (key, object, type = 'style') => {
  if (!object || typeof object !== 'object') {
    console.warn(`Invalid ${type} object provided.`);
    return '';
  }
  if (!Object.keys(object).includes(key)) {
    console.warn(
      `Invalid ${type} "${key}". Valid options are: ${Object.keys(object).join(', ')}`,
    );
    return '';
  }
  return object[key];
};
