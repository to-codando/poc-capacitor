import { pubsubFactory } from 'lemejs'

export const eventBus = pubsubFactory()

export const animateCSS = (element, animation) => {
  const prefix = 'animated'

  return new Promise((resolve, reject) => {
    element.classList.add(prefix, animation)

    function handleAnimationEnd (event) {
      event.stopPropagation()
      element.classList.remove(prefix, animation)
      resolve('Animation ended')
    }

    element.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}
