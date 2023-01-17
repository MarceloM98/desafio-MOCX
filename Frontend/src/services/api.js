import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

api.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2))
  return response
})