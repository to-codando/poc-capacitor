export default ({ state, props, html }) => {
  console.log(state)
  return html`
    <div class="ctx-content">
        <router-view></router-view>
    </div>
    <div class="ctx-nav ${state.navIsVisible && 'active'}">
        <app-nav></app-nav>
    </div>
`
}
