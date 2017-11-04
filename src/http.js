import { defaults } from 'lodash'
import axios from 'axios'

export const createClient = (options = {}) => axios.create(defaults({
  baseURL: 'http://54.147.131.163:8080/app/',
  headers: {'X-Custom-Header': 'foobar'}
}, options))

export default createClient()
