export default ({ state, html }) => html`
  <div class="ctx-wrapper ${state.isBlur ? 'blur' : ''}">
    <slot></slot>
  </div>
`
