import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appDashboard } from '../components/appDashboard'
import { appLogin } from '../components/appLogin'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appLogin,
  isInitial: true
})

router.add({
  hash: '/resume',
  validator: /^#\/resume$/,
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
