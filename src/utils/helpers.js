
export const scrollTop = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 10,
  });
};


/**
     * Save the user object into local storage
     * @param {object} user - The user object
     */
export const saveUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};

/**
   * Gets the user object from local storage
   */
export const getUser = () => {
  const data = window.localStorage.getItem('user');
  return data ? JSON.parse(data) : null;
};

/**
 * Checks if the current user is authenticated
 * @returns {boolean} TRUE if the user is authenticated, FALSE otherwise
 */
export const isLoggedIn = () => getUser() !== null;

/**
   * Logs out the user by clearing the local storage
   */
export const logout = () => {
  localStorage.clear();
};

export default {};
