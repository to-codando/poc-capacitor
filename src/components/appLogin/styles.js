export default ({ ctx, css }) => css`
  ${ctx},
  .ctx-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
    height:100vh;
    background:#dea427;
  }

  .ctx-wrapper {
    padding:1rem;
  }

  .ctx-wrapper div { 
    display: block;
    width:100%;
  }

  .ctx-wrapper h1 {
    text-align: center;
    width:100%;
    padding:0;
    margin-bottom:3rem;
    font-size: 1.4rem;
    color:#563e0c
  }

  .ctx-wrapper p {
    display: block;
    width:100%;
    margin-bottom:.5rem;
    color:#563e0c
  }

  .ctx-wrapper button {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:50px;
    background:#bd9031;
    color:#563e0c;
    border-radius:5px;
    border:0;
    font-size: .875rem;
    text-transform: uppercase;
  }

  .ctx-wrapper button + button {
    margin-top:1rem
  }
  
`
