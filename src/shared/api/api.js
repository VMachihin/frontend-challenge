import { API_KEY, BASE_URL } from '../lib/constants';

export default class Api {
  constructor(url, { headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }

  async getCards(limit = 5, page = 0) {
    const res = await fetch(`${this._url}?limit=${limit}&page${page}`, {
      headers: this._headers,
    });
    return this._checkResponse(res);
  }
}

export const api = new Api(BASE_URL, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});
