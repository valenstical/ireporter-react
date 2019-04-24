import axios from 'axios';

/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any
 * @returns {object} The axios promise object
 */
const request = async (
  {
    route,
    method,
    payload,
    token
  }
) => {
  method = method || 'get';
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  if (!token) {
    delete headers.Authorization;
  }
  return axios({
    data: payload,
    url: `${process.env.API_BASE_URL}/${route}`,
    method,
    headers
  });
};

export default request;
