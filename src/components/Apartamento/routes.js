import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Apartamento from './components/Apartamento'
import visualizarApartamento from './components/visualizar'
import inserirApartamento from './components/inserir'
import editarApartamento from './components/editar'

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
        path: 'apartamento',
        name: 'Apartamento',
        component: Apartamento
      },
      {
        path: '/apartamento/novo',
        name: 'InserirApartamento',
        component: inserirApartamento
      },
      {
        path: '/apartamento/editar/:id',
        name: 'EditarApartamento',
        component: editarApartamento
      },
      {
        path: '/apartamento/list/:id',
        name: 'VisualizarApartamento',
        component: visualizarApartamento
      }
    ]
  }
]
