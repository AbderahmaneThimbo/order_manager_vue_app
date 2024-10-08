import { createRouter, createWebHistory } from 'vue-router'
import ListCustomer from '../components/customers/ListCustomer.vue'
import ListOrder from '@/components/orders/ListOrder.vue'
import ListProduct from '@/components/products/ListProduct.vue'
import AddOrder from '@/components/orders/AddOrder.vue'
import UpdateOrder from '@/components/orders/UpdateOrder.vue'
import ViewOrder from '@/components/orders/ViewOrder.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'customers',
        component: ListCustomer
      },
      {
        path: '/orders',
        name: 'orders',
        component: ListOrder
      },
      {
        path: '/create',
        name: 'create',
        component: AddOrder
      },
      {
        path: '/edite',
        name: 'edite',
        component: UpdateOrder
      },
      {
        path: '/view',
        name: 'view',
        component: ViewOrder
      },
      {
        path: '/products',
        name: 'products',
        component: ListProduct
      }
    ]
  })
  
  export default router