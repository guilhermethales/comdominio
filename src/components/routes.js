import {routes as dashboard} from './Dashboard'
import {routes as morador} from './Morador'
import {routes as lancamento} from './Lancamento'
import {routes as bloco} from './Bloco'
import {routes as apartamento} from './Apartamento'
import {routes as lazer} from './Lazer'
import {routes as agendamento} from './Agendamento'
import {routes as solicitacao} from './Solicitacao'
import {routes as notificacao} from './Notificacao'
import {routes as mensagem} from './Mensagem'

export default [...dashboard, ...morador, ...lancamento, ...bloco, ...apartamento, ...lazer, ...agendamento, ...solicitacao, ...notificacao, ...mensagem]
