const BASE_URL = 'http://localhost:3001';

const methods = {
  get(path) {
    return fetch(BASE_URL + path)
  },
  put(path, body) {
    return fetch(BASE_URL + path, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}

export default methods;

