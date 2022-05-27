export default ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    flex-wrap:wrap;
    width:100%;
    background:#f9f9f9;
    border-radius:5px;
    overflow: hidden;
  }

  .ctx-name {
    display: flex;
    width:100%;
    padding:1rem;
    background:#fff;
    color:#3d6b7f;
    font-weight:600;
    font-size: 1rem
  }

  .ctx-wrapper {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    padding:1rem
  }

  .ctx-wrapper.blur li,
  .ctx-wrapper.blur li span {
    color: transparent;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
 }
  
  .ctx-wrapper li {
    width:100%;
    padding:1rem 0;
  }

  .ctx-wrapper li + li {
    border-top: 1px #ebebeb solid;
  }

  .ctx-wrapper li:first-of-type { padding-top: 0; }
  .ctx-wrapper li:last-of-type { padding-bottom: 0; }
  
  
  .ctx-wrapper span {
    display: inline-block;
    width:60px;
    font-size: .875rem;
    color:#3d6b7f;
  }

  .ctx-custom-list,
  .ctx-custom-list table,
  .ctx-custom-list thead,
  .ctx-custom-list tbody,
  .ctx-custom-list tr {
    display: flex;
    width:100%;
    flex-wrap:wrap
  }

  .ctx-custom-list tr + tr {
    border-top: 1px #ebebeb solid
  }

  .ctx-custom-list th,
  .ctx-custom-list td {
    text-align:left;  
    padding:1rem;
    width:33.333%
  }

  .ctx-custom-list th:last-of-type,
  .ctx-custom-list td:last-of-type {
    text-align:right;
  }

  .ctx-custom-list thead {
    border-bottom: 1px #ebebeb solid
  }

  .ctx-custom-list.blur table,
  .ctx-custom-list.blur tbody {
    color: transparent;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
 }  

  `
