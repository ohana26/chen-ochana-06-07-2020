
import BoughtItemsPage from '../pages/BoughtItemsPage.vue';
import ReceivedListPage from '../pages/ReceivedListPage.vue';

const routes = [
  {
    path: '/list',
    component: BoughtItemsPage
  },
  {
    path: '/received',
    component: ReceivedListPage
  }
]

export default routes;
