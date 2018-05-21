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
        name: 'Inserir Apartamento',
        component: inserirApartamento
      },
      {
        path: '/apartamento/editar/:id',
        name: 'Editar Apartamento',
        component: editarApartamento
      },
      {
        path: '/apartamento/list/:id',
        name: 'Visualizar Apartamento',
        component: visualizarApartamento
      }
    ]
  }
]
