import axios, {AxiosError} from 'axios';

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

// function isAxiosError(error: unknown): error is AxiosError {
//   return (error as AxiosError).isAxiosError !== undefined
// }

// export interface APIError {
//   status: number
//   message: string
// }

// export const handleAxiosError = (error: AxiosError | unknown): APIError => {
//   if (!isAxiosError(error)) {
//     return {
//       status: 500,
//       message:
//         error instanceof Error ? (error.message ? error.message : 'internal server error') : 'internal server error',
//     }
//   }
//   let errorMessage = ''
//   let errorStatus = 500
//   if (error.response) {
//     errorMessage = error.response.data
//     errorStatus = error.response.status
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     errorMessage = error.code === 'ECONNABORTED' ? 'request to courses API timed out' : 'request to courses API failed'
//     errorStatus = 500
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     errorMessage = error.message
//     errorStatus = 500
//   }
//   return { status: errorStatus, message: errorMessage }
// }
