import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://606e9d010c054f0017657376.mockapi.io/api/v1';

const HEADERS = {
  'Content-Type': 'application/json',
};

const request = (options: any) => {
  const fetchInstance = axios.create({
    baseURL: BASE_URL,
    headers: HEADERS,
  });

  return fetchInstance({
    ...options,
  });
};

const get = (url: string, params?: any) => request({
  method: 'GET',
  url,
  params
});

const post = (url: string, body: any) => request({
  method: 'POST',
  url,
  data: body
});

export default {
  get,
  post
};