export default ({ state, props, html }) => {
  return html`
    <app-loading></app-loading>
    <div class="ctx-content">
        <router-view></router-view>
    </div>
    <div class="ctx-nav ${state.navIsVisible && 'active'}">
        <app-nav></app-nav>
    </div>
`
}
