import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from './pages/cadastro/Categoria';
import Page404 from './pages/404/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';


ReactDOM.render( 
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/Video" component={CadastroVideo} exact/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria} exact/>
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA