import { defaults } from 'lodash'
import axios from 'axios'

export const createClient = (options = {}) => axios.create(defaults({
  baseURL: 'http://www.comdomino.com/app/',
  headers: {'X-Custom-Header': 'foobar'}
}, options))

export default createClient()
