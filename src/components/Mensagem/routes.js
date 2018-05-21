import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Mensagem from './components/Mensagem'
import visualizarMensagem from './components/visualizar'
import inserirMensagem from './components/inserir'
import editarMensagem from './components/editar'

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
        path: 'mensagem',
        name: 'Mensagem',
        component: Mensagem
      },
      {
        path: '/mensagem/novo',
        name: 'Inserir Mensagem',
        component: inserirMensagem
      },
      {
        path: '/mensagem/editar/:id',
        name: 'Editar Mensagem',
        component: editarMensagem
      },
      {
        path: '/mensagem/list/:id',
        name: 'Visualizar Mensagem',
        component: visualizarMensagem
      }
    ]
  }
]
