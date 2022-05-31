import template from './template'
import styles from './styles'

import { eventBus } from '../../helpers'
import { observerFactory } from 'lemejs'

export const appLoading = () => {
  const state = observerFactory({
    isVisible: true
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = dom => {
    eventBus.on('toggle-loader', () => toggle(dom))
  }

  const toggle = ({ queryOnce }) => {
    const wrapperElement = queryOnce('div')
    const parentElement = wrapperElement.parentElement
    wrapperElement.classList.add('hide-loader')

    setTimeout(() => {
      parentElement.classList.add('hide')
    }, 500)
  }

  return { template, styles, hooks, state }
}
