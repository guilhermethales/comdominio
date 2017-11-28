import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Bloco from './components/Bloco'
import visualizarBloco from './components/visualizar'
import inserirBloco from './components/inserir'
import editarBloco from './components/editar'

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
        path: 'bloco',
        name: 'Bloco',
        component: Bloco
      },
      {
        path: '/bloco/novo',
        name: 'InserirBloco',
        component: inserirBloco
      },
      {
        path: '/bloco/editar/:id',
        name: 'EditarBloco',
        component: editarBloco
      },
      {
        path: '/bloco/list/:id',
        name: 'VisualizarBloco',
        component: visualizarBloco
      }
    ]
  }
]
