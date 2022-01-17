import axios from 'axios';

const quizes = axios.create({
  baseURL: 'https://opentdb.com',
});

quizes.interceptors.request.use(request => {
  return request
})

quizes.interceptors.response.use(
  response => {
    return response;
  },
);

export default quizes;
