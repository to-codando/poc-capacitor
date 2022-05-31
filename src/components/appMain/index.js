import template from './template'
import styles from './styles'

import { appLoading } from '../appLoading'
import { appNav } from '../appNav'

export const appMain = () => {
  const children = () => ({
    appNav,
    appLoading
  })

  return { template, styles, children }
}
