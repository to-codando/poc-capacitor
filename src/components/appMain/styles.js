export default ({ ctx, css }) => css`
    ${ctx} { 
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap:wrap;
        width:100vw;
        height:100vh;
        background: #f9f9f9
     } 
     
     .ctx-nav {
         width:100vw;
         height:250px;
         background: #000;
         position:fixed;
         bottom:0;
     }

     .ctx-content {
         width: 100vw;
         height:100vh;
         background:#a3bbc3;
     }
`
