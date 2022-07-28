import axios from 'axios';

const axiosInstance = () => {
  const defaultOptions = {
    // baseURL: Constants.manifest?.extra?.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  const instance = axios.create(defaultOptions);

  return instance;
};

export default axiosInstance();
