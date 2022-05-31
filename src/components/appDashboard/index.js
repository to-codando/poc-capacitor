import template from './template'
import styles from './styles'

import { appCard } from '../appCard'
import { appList } from '../appList'
import { appAccountBalance } from '../appAccountBalance'

import { eventBus } from '../../helpers'

export const appDashboard = () => {
  const children = () => ({
    appCard,
    appList,
    appAccountBalance
  })

  const hooks = () => ({
    afterOnInit
  })

  const afterOnInit = () => {
    setTimeout(() => eventBus.emit('toggle-loader'), 5000)
  }

  return { template, styles, children, hooks }
}
