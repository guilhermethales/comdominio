import DashboardLayout from './Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from './Views/Overview.vue'
import UserProfile from './Views/UserProfile.vue'
import Notifications from './Views/Notifications.vue'
import Icons from './Views/Icons.vue'
import Maps from './Views/Maps.vue'
import Typography from './Views/Typography.vue'
import TableList from './Views/TableList.vue'

export default [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]
