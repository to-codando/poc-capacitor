import template from './template'
import styles from './styles'
import { observerFactory } from 'lemejs'
import { eventBus } from '../../helpers'

export const appAccountBalance = ({ props }) => {
  const state = observerFactory({
    isBlur: props.isBlur || true
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    eventBus.on(`${props.eventListen}`, ({ applyBlur }) => {
      state.set({ ...state.get(), isBlur: applyBlur })
    })
  }

  return {
    state,
    template,
    styles,
    hooks
  }
}
