export default ({ state, html }) => html`
  <div class="ctx-head">
    <div class="ctx-title">
      
      <slot slot-id="title"></slot>

      <button>
        <span class="material-symbols-rounded">
          visibility
        </span>
      </button>

    </div>
  </div>
  <div class="ctx-content">
    <slot slot-id="content"></slot>
  </div>
`
