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
        name: 'InserirMensagem',
        component: inserirMensagem
      },
      {
        path: '/mensagem/editar/:id',
        name: 'EditarMensagem',
        component: editarMensagem
      },
      {
        path: '/mensagem/list/:id',
        name: 'VisualizarMensagem',
        component: visualizarMensagem
      }
    ]
  }
]
