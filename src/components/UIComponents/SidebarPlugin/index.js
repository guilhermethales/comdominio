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
      icon: 'ti-home',
      path: '/admin/stats'
    },
    {
      name: 'Estacionamento',
      icon: 'ti-car',
      path: '/admin/typography'
    },
    {
      name: 'Funcionários',
      icon: 'ti-star',
      path: '/admin/icons'
    },
    {
      name: 'Notificações',
      icon: 'ti-bell',
      path: '/admin/notifications'
    },
    {
      name: 'Lazer',
      icon: 'ti-basketball',
      path: '/admin/maps'
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
