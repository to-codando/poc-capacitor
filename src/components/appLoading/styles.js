export default ({ ctx, css }) => css`
  
  .ctx-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
  }

  .ctx-logo {
    width: 6rem;
  }

  .ctx-wrapper {
    background: linear-gradient(-45deg, #efde0d, #dea427, #2c88a7, #2c88a7);
    background-size: 400% 800%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes hideloader {
    from {
      opacity:1
    }

    to{
      opacity:0;
    }

  }

  @keyframes loadpulse {
    from {
      opacity: 1
    }
  
    50% {
      opacity: .2
    }
  
    to {
     opacity: 1
    }
  }

  .hide-loader {
    opacity:0;
    animation: hideloader ease-in;
    animation-duration: .2s;
    overflow: hidden;
  }

  .hide {display:none}

  .pulse {
    -webkit-animation: loadpulse ease-in infinite;
    animation: loadpulse infinite;
  }
  
  .ctx-wrapper .animated {
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }  

  .ctx-animate {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:100%
  }
  
  .ctx-animate p {
    font-size: 1rem;
    color:#f9f9f9;
    padding-top:5px;  
    width:100%;
    text-align:center
  }
`
