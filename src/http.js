import { defaults } from 'lodash'
import axios from 'axios'

export const createClient = (options = {}) => axios.create(defaults({
  baseURL: 'http://34.238.67.140/app/',
  headers: {'X-Custom-Header': 'foobar'}
}, options))

export default createClient()
