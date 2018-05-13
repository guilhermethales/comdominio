import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Lazer from './components/Lazer'
import visualizarLazer from './components/visualizar'
import inserirLazer from './components/inserir'
import editarLazer from './components/editar'

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
        path: 'lazer',
        name: 'Lazer',
        component: Lazer
      },
      {
        path: '/lazer/novo',
        name: 'InserirLazer',
        component: inserirLazer
      },
      {
        path: '/lazer/editar/:id',
        name: 'EditarLazer',
        component: editarLazer
      },
      {
        path: '/lazer/list/:id',
        name: 'VisualizarLazer',
        component: visualizarLazer
      }
    ]
  }
]
