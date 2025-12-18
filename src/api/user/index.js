import { clientFetch } from '../clientFetch'

export function login(body) {
  return clientFetch.post('user/login', body)
}

export function registerUser(body) {
  return clientFetch.post('user/register', body)
}

export function logout() {
  return clientFetch.get('user/logout')
}

export function refresh() {
  return clientFetch.get('user/refresh')
}
