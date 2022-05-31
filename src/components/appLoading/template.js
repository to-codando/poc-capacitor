import logo from '../../assets/images/logo.svg'

export default ({ state, html }) => html`
<div class="ctx-wrapper">
  <div class="ctx-animate animated pulse">
    <div>
      <img src="${logo}" alt="RoxPartner" class="ctx-logo">
      <p>..Carregando..</p>
    </div>
  </div>
</div>
`
