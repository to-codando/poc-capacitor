export default ({ ctx, css }) => css`
    ${ctx} { 
        display:flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-wrap:wrap;
        width:100vw;
        height:100vh;
        background: #f9f9f9;
        overflow:hidden;
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
         height:calc(100vh - 250px);
         background:#a3bbc3;
         position:fixed;
         top:0;
         left:0;
         right:0;
     }

@media all and (max-width:780px) {
    .ctx-content {
        height: calc(100vh - 4rem)
    }
    .ctx-nav {
        height:4rem;
    }

    .ctx-nav.active {
        height:100vh
    }
}
`
