export default ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    background:#fff;
    border-radius:10px;
    overflow: hidden;
  }

  .ctx-head,
  .ctx-content {
    width:100%
  }

  .ctx-title {
    display: flex;
    justify-content: space-between;
    width:100%;
    padding:1rem 1rem;
    background:#fff;
    border-bottom: 1px #ebebeb solid;
    position:relative;
    color:#3d6b7f;
    font-weight:normal;
    font-size: 1rem;
    text-transform: uppercase ;
  }

  .ctx-title button {
    background:#fff;
    border:0;
    border-radius:5px;
    padding: 1rem 1rem .9rem 1rem;
    position:absolute;
    top:0;
    right:0
  }

  .ctx-title span {
    font-size: .975rem
  }

  .ctx-hide {
    display:none
  }
`
