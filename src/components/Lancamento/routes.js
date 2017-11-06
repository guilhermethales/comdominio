import DashboardLayout from '../Dashboard/Layout/DashboardLayout'
import Lancamento from './components/Lancamento'
import visualizarLancamento from './components/visualizar'
import inserirLancamento from './components/inserir'
import editarLancamento from './components/editar'

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
        path: 'lancamento',
        name: 'lancamento',
        component: Lancamento
      },
      {
        path: '/lancamento/novo',
        name: 'InserirLancamento',
        component: inserirLancamento
      },
      {
        path: '/lancamento/editar/:id',
        name: 'Editarlancamento',
        component: editarLancamento
      },
      {
        path: '/lancamento/list/:id',
        name: 'VisualizarLancamento',
        component: visualizarLancamento
      }
    ]
  }
]
