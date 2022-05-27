import template from './template'
import styles from './styles'

import { appCard } from '../appCard'
import { appList } from '../appList'
import { appAccountBalance } from '../appAccountBalance'

export const appDashboard = () => {
  const children = () => ({
    appCard,
    appList,
    appAccountBalance
  })

  return { template, styles, children }
}
