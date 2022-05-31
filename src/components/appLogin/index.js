import { Dialog } from '@capacitor/dialog'

import template from './template'
import styles from './styles'

import { eventBus } from '../../helpers'
import { biometricAuth } from '../../services/biometricAuth'

export const appLogin = () => {
  const hooks = () => ({
    afterOnInit
  })

  const afterOnInit = async (dom) => {
    setTimeout(() => hideLoader(), 3000)
    onClick(dom)
  }

  const onClick = ({ on, queryOnce }) => {
    const buttonBanco = queryOnce('#btn-banco')
    on('click', buttonBanco, authenticate)
  }

  const authenticate = async () => {
    const biometric = await biometricAuth()
    const { isAvailable, isValid } = await biometric.auth()
    !isAvailable || !isValid
      ? await showAlert()
      : window.location.hash = '#/resume'
  }

  const showAlert = async () => {
    await Dialog.alert({
      title: 'Acesso negado',
      message: 'Cadastro inválido. \nRegistre uma opção de biometria.'
    })
  }

  const hideLoader = () => {
    setTimeout(() => {
      eventBus.emit('toggle-loader', { hide: true })
    }, 0)
  }

  return { template, styles, hooks }
}
