import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Notificacao from './components/Notificacao'
import visualizarNotificacao from './components/visualizar'
import inserirNotificacao from './components/inserir'
import editarNotificacao from './components/editar'

export default [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/home',
    children: [
      {
        path: 'notificacao',
        name: 'Notificacao',
        component: Notificacao
      },
      {
        path: '/notificacao/novo',
        name: 'Inserir Notificação',
        component: inserirNotificacao
      },
      {
        path: '/notificacao/editar/:id',
        name: 'Editar Notificação',
        component: editarNotificacao
      },
      {
        path: '/notificacao/list/:id',
        name: 'Visualizar Notificação',
        component: visualizarNotificacao
      }
    ]
  }
]
