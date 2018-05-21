import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Servico from './components/Servico'
import visualizarServico from './components/visualizar'
import inserirServico from './components/inserir'
import editarServico from './components/editar'

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
        path: 'servico',
        name: 'Servico',
        component: Servico
      },
      {
        path: '/servico/novo',
        name: 'InserirServico',
        component: inserirServico
      },
      {
        path: '/servico/editar/:id',
        name: 'EditarServico',
        component: editarServico
      },
      {
        path: '/servico/list/:id',
        name: 'VisualizarServico',
        component: visualizarServico
      }
    ]
  }
]
