import template from './template'
import styles from './styles'

import { appNav } from '../appNav'

export const appMain = () => {
  const children = () => ({
    appNav
  })
  return { template, styles, children }
}
