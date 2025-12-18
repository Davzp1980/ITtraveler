import { clientFetch } from '../clientFetch'

export async function getFavoritePlace() {
  const res = await clientFetch.get('/points')
  console.log(res)

  return res
}

export function addFavoritePlace(body) {
  return clientFetch.post('/points', body)
}

export function updateFavoritePlace(body) {
  return clientFetch.put('/points', body)
}

export function deleteFavoritePlace(id) {
  return clientFetch.delete('/points', id)
}
