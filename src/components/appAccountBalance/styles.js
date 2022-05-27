export default ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding:3rem 0;
    background:#f9f9f9;
  }

  .ctx-wrapper {
    font-size: 2rem;
  }

  .ctx-wrapper span {
    font-size: 1rem
  }

  .ctx-wrapper.blur,
  .ctx-wrapper.blur p {
    color: transparent;
    opacity:0.8;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
 }  

 .ctx-wrapper.blur p {
   color:#000;
   filter: blur(5px);
 }
`
