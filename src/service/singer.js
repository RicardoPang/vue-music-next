import { get } from './base'

export function getSingerList () {
  return get('/api/getSingerList')
}
