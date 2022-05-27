import template from './template'
import styles from './styles'
import { observerFactory } from 'lemejs'

import { eventBus } from '../../helpers'

export const appList = ({ props }) => {
  const state = observerFactory({
    applyBlur: true,
    dataList: []
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    eventBus.on(`${props.eventListen}`, ({ applyBlur }) => {
      state.set({ ...state.get(), applyBlur })
    })
    setData(props)
  }

  const setData = (data) => {
    const dataList = parseProps(data)
    state.set({ ...state.get(), dataList })
  }

  const parseProps = (props) => {
    const data = []

    Object.keys(props).forEach(key => {
      if (key !== 'eventListen' && key !== 'eventEmit') {
        const text = props[key]
        const [dataKey, dataValue] = text.split(':')
        data.push({ label: dataKey, value: dataValue })
      }
    })

    return data
  }

  return {
    template,
    styles,
    hooks,
    state
  }
}
