import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Solicitacao from './components/Solicitacao'
import visualizarSolicitacao from './components/visualizar'
import inserirSolicitacao from './components/inserir'
import editarSolicitacao from './components/editar'

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
        path: 'solicitacao',
        name: 'Solicitacao',
        component: Solicitacao
      },
      {
        path: '/solicitacao/novo',
        name: 'InserirSolicitacao',
        component: inserirSolicitacao
      },
      {
        path: '/solicitacao/editar/:id',
        name: 'EditarSolicitacao',
        component: editarSolicitacao
      },
      {
        path: '/solicitacao/list/:id',
        name: 'VisualizarSolicitacao',
        component: visualizarSolicitacao
      }
    ]
  }
]
