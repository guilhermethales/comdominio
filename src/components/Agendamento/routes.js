import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Agendamento from './components/Agendamento'
import visualizarAgendamento from './components/visualizar'
import inserirAgendamento from './components/inserir'
import editarAgendamento from './components/editar'

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
        path: 'agendamento',
        name: 'Agendamento',
        component: Agendamento
      },
      {
        path: '/agendamento/novo',
        name: 'Inserir Agendamento',
        component: inserirAgendamento
      },
      {
        path: '/agendamento/editar/:id',
        name: 'Editar Agendamento',
        component: editarAgendamento
      },
      {
        path: '/agendamento/list/:id',
        name: 'Visualizar Agendamento',
        component: visualizarAgendamento
      }
    ]
  }
]
