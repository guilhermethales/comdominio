import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Morador from './components/Morador'
import visualizarMorador from './components/visualizar'
import inserirMorador from './components/inserir'
import editarMorador from './components/editar'

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
        path: 'morador',
        name: 'Morador',
        component: Morador
      },
      {
        path: '/morador/novo',
        name: 'InserirMorador',
        component: inserirMorador
      },
      {
        path: '/morador/editar/:id',
        name: 'EditarMorador',
        component: editarMorador
      },
      {
        path: '/morador/list/:id',
        name: 'VisualizarMorador',
        component: visualizarMorador
      }
    ]
  }
]
