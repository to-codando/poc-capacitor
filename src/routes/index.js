import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appDashboard } from '../components/appDashboard'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appDashboard,
  isInitial: true
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
