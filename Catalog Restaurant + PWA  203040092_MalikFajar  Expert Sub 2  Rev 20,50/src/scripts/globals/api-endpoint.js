import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  LIST: `${BASE_URL}/list`,
  DETAIL: (id) => `${BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${BASE_URL}/review`,
};
export default API_ENDPOINT;