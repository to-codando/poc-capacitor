import template from './template'
import styles from './styles'
import { eventBus } from '../../helpers'

export const appCard = ({ props }) => {
  const state = {
    applyBlur: true,
    offVisibilityClass: 'visibility_off',
    onVisibilityClass: 'visibility'
  }
  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = (dom) => {
    onClickButton(dom)
  }

  const onClickButton = ({ on, queryOnce }) => {
    const button = queryOnce('button')
    const icon = button.querySelector('span')
    on('click', button, () => toggleBlur(icon))
  }

  const toggleBlur = (icon) => {
    state.applyBlur = !state.applyBlur
    eventBus.emit(`${props.eventEmit}`, { applyBlur: state.applyBlur })
    state.applyBlur
      ? icon.textContent = state.onVisibilityClass
      : icon.textContent = state.offVisibilityClass
  }

  return { template, styles, hooks }
}
