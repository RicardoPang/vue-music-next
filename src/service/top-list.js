import { get } from './base'

export function getTopList () {
  return get('/api/getTopList')
}
