/**
 * Generates action types
 * @param {string} name A unique identifier for the action type
 * @return {object} The generated action type
 */
const typeGenerator = name => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
});

/**
 * Reusable action creator
 * @param {string} type The action type
 * @param {object} data The data to dispatch
 */
export const action = (type, data) => ({ type, data });


export default typeGenerator;
