import { NativeBiometric } from 'capacitor-native-biometric'

export const biometricAuth = async () => {
  const verifyIdentity = async () => {
    try {
      await NativeBiometric.verifyIdentity({
        title: 'Log in',
        reason: 'Para acessar fácil o banco',
        subtitle: 'Desbloqueio usando o rosto.',
        description: 'Olhe para a camera, se você for o dono do celular, te daremos acesso.'
      })
      return { isValid: true }
    } catch (err) {
      return { isValid: false }
    }
  }

  const isAvailableCheck = async () => {
    try {
      return await NativeBiometric.isAvailable()
    } catch (err) {
      window.alert(err)
    }
  }

  const auth = async () => {
    const isAvailable = await isAvailableCheck()
    const { isValid } = await verifyIdentity()

    return { isAvailable, isValid }
  }

  const setCredentials = async (credentials) => {
    return await NativeBiometric.setCredentials({
      ...credentials,
      server: 'www.example.com'
    })
  }

  const removeCreadentials = async () => {
    return await NativeBiometric.deleteCredentials({
      server: 'www.example.com'
    })
  }

  return {
    auth,
    setCredentials,
    removeCreadentials
  }
}
