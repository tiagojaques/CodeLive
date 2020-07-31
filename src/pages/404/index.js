import React from 'react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import PageDefault from './../../components/PageDefault/index';

const Main = styled.main`
   justify-content: center;
   align-items: center;
   padding-top:1%;
   h1 {
      text-align:center;
   }
   canvas {
      border: 1px solid #000;
      display: block;
      margin: 0 auto;
   };
`;

function Page404() {
    return ( 
      <PageDefault>
         <Main>
            <h1>Pagina não encontrada... divirta-se!</h1>
            <canvas id="game-canvas" width="320" height="480"></canvas>
         </Main>
      </PageDefault>

    )
}

const script = document.createElement("script");
    script.src = "/assets/jogo.js";
    script.async = true;
    document.body.appendChild(script);

export default Page404;