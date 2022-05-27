export default ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
    position:relative;
    background:#3d6b7f;
    overflow: hidden;
  }

  ${ctx}.active {
    top: -49.125rem
  }

  .ctx-nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:calc(100% - 11.25rem);
    height:250px;
    position:relative;
    z-index:100
  }

  .ctx-nav-list li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding:1rem;
    height:250px;
    border-radius:4px;
  }

  .ctx-nav-list a {
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items:center;
    width:100%;
    color:#dea427
  }

  .ctx-nav-list span {
    width:100%;
    text-align:center;
    font-size: 3rem;
    margin-bottom:1rem;
    font-weight:lighter;
  }

  .ctx-button {
    height:calc(100% - 2rem);    
    width:4.625rem;
    border:0;
    border-radius:4px;
    cursor: pointer;
    position:absolute;
    background:#dea427;
  }

  .ctx-button > span {
    font-size: 2rem;
    color: #fff
  }

  .ctx-align-left {
    left:1rem;
  }

  .ctx-align-right {
    right:1rem
  }

  .ctx-nav-button {
    display: none;
  }

  @media all and (max-width:480px) {
    .ctx-nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width:100%;
      height:4rem;
      background: rgba(0, 0, 0, .5);
    }

    .ctx-nav-button span {
      color:#fff;
      font-size: 2rem
    }
    .ctx-nav-list {
      flex-wrap:wrap;
      height:calc(100vh + 4rem);
      padding:1rem;
      
    }
    .ctx-nav-list li {
      height: auto
    }
    .ctx-nav-list a {}
    .ctx-nav-list span {}
    .ctx-button { display: none}
    .ctx-button > span {}
    .ctx-align-left {}
    .ctx-align-right {}
  }
`
