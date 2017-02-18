const BASE_API = 'http://localhost:3001';

const methods = {
  get(path) {
    return fetch(BASE_API + path)
  },
  put(path, body) {
    return fetch(BASE_API + path, {
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

