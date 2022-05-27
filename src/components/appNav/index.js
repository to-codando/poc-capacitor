import template from './template'
import styles from './styles'

export const appNav = () => {
  const state = {
    navIsVisible: false
  }

  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = (dom) => {
    onClickButton(dom)
  }

  const onClickButton = ({ on, queryOnce }) => {
    const button = queryOnce('.nav-button')
    on('click', button, () => toggleNav({ queryOnce }))
  }

  const toggleNav = ({ queryOnce }) => {
    const navButton = queryOnce('.nav-button')
    navButton.parentElement.classList.toggle('active')
  }

  return {
    template,
    styles,
    hooks
  }
}
