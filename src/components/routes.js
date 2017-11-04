import {routes as dashboard} from './Dashboard'
import {routes as morador} from './Morador'

console.log(...morador)

export default [ ...dashboard, ...morador ]
