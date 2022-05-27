export default ({ ctx, css }) => css`
    ${ctx} {
        display: flex;
        flex-wrap:wrap;
        width:100%;
    }  

    .ctx-grid,
    .ctx-container {
        display: flex;
        flex-wrap: wrap;
        width:100%;
    }

    .ctx-grid {
        max-width:1680px;
        margin:0 auto;
        overflow-y: scroll;
    }

    .ctx-container {
        padding:1rem
    }

    .ctx-container + .ctx-container {
        padding-top:0
    }

    .ctx-column-1{
        display: flex;
        flex-wrap:wrap;
        width:26.25rem;
    }

    .ctx-column-2 {
        display: flex;
        flex-wrap:wrap;
        width:calc(100% - 26.25rem);
    }

    .ctx-column-2 .ctx-container {
        padding-left:0
    }

    @media all and (max-width: 780px) {
        .ctx-column-1,
        .ctx-column-2 {
            width:100%;
        }

        .ctx-column-2 {
            width:calc(100% - 1rem);
            padding-top:0;
            padding-left:1rem
        }
        .ctx-column-2 .ctx-container {
            padding-top:0
        }

        .ctx-column-1 .ctx-container {
            width:50%;
            padding-top:1rem
        }

        .ctx-column-1 .ctx-container:first-of-type {
            width:calc(100% - 1rem);
            padding-bottom:0;
        }

        .ctx-column-1 .ctx-container:last-of-type {
                padding-left:0;
                width:calc(50% - 1rem)
        }

    }

    @media all and (max-width:480px) {
        .ctx-column-1,
        .ctx-column-2 {
            width:100%;
            padding:1rem;
        }
        .ctx-column-2 { padding-top: 0}
        .ctx-column-1 .ctx-container,
        .ctx-column-1 .ctx-container:first-of-type,
        .ctx-column-1 .ctx-container:last-of-type,
        .ctx-column-2 .ctx-container,
        .ctx-column-2 .ctx-container:first-of-type,
        .ctx-column-2 .ctx-container:last-of-type {
            width:100%;
            padding:0;
        }

        .ctx-column-1 .ctx-container + .ctx-container {
            padding-top: 1rem
        }
    }
`
