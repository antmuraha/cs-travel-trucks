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
      const response = await fetch(`${this.#baseUrl}${path}`);
      if (!response.ok) {
        throw new Error(`${await response.text()}`);
      }
      return response.json();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw { status: 'error', message } as FetchError;
    }
  }
}

export default new Client(BASE_URL);
