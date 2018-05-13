import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/home'
    },
    {
      name: 'Morador',
      icon: 'ti-user',
      path: '/admin/morador'
    },
    {
      name: 'Financeiro',
      icon: 'ti-money',
      path: '/admin/lancamento'
    },
    {
      name: 'Blocos',
      icon: 'ti-package',
      path: '/admin/bloco'
    },
    {
      name: 'Apartamento',
      icon: 'ti-home',
      path: '/admin/apartamento'
    },
    {
      name: 'Lazer',
      icon: 'ti-basketball',
      path: '/admin/lazer'
    },
    {
      name: 'Agendamento',
      icon: 'ti-calendar',
      path: '/admin/agendamento'
    },
    {
      name: 'Solicitação',
      icon: 'ti-check-box',
      path: '/admin/solicitacao'
    },
    {
      name: 'Notificação',
      icon: 'ti-bell',
      path: '/admin/notificacao'
    },
    {
      name: 'Mensagem',
      icon: 'ti-comments',
      path: '/admin/mensagem'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
