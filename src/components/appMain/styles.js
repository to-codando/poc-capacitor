export default ({ ctx, css }) => css`
    ${ctx} { 
        display:flex;
        justify-content: flex-start;
        align-items: flex-end;
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

@media all and (max-width:480px) {
    .ctx-nav {
        height:4rem;
    }

    .ctx-nav.active {
        height:100vh
    }
}
`
