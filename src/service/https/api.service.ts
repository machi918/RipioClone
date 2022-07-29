import axios from 'axios';

const axiosInstance = () => {
  const defaultOptions = {
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
