import axios from 'axios';

const BASE_URL = import.meta.env.MODE !== 'production' ? 'http://localhost:3000' : import.meta.env.VITE_APP_BASE_API;

export interface FetchError {
  status: 'error';
  message: string;
}

class Client {
  #baseUrl: string;

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }
  async get(path: string) {
    try {
      const response = await axios.get(`${this.#baseUrl}${path}`);
      return response.data;
    } catch (error) {
      let message = 'Unknown error';
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      throw { status: 'error', message } as FetchError;
    }
  }

  async post(path: string, body: Record<string, unknown> | FormData) {
    try {
      let config = {};
      let data: Record<string, unknown> | FormData | string = body;
      if (!(body instanceof FormData)) {
        config = { headers: { 'Content-Type': 'application/json' } };
        data = JSON.stringify(body);
      }
      const response = await axios.post(`${this.#baseUrl}${path}`, data, config);
      return response.data;
    } catch (error) {
      let message = 'Unknown error';
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      throw { status: 'error', message } as FetchError;
    }
  }
}

export default new Client(BASE_URL);
