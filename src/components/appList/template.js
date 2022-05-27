export default ({ state, html }) => html`
  ${
    state.dataList.length && html`
      <ul class="ctx-wrapper ${state.applyBlur ? 'blur' : ''}">
      ${state.dataList.map(data => html`
        <li><span>${data.label}:</span> ${data.value}</li>
      `).join('')}
      </ul>    
    `
  }
  ${
    !state.dataList.length && html`
      <div class="ctx-custom-list ${state.applyBlur ? 'blur' : ''}">
        <slot slot-id="custom"></slot>
      </div    
    `
  }
`
