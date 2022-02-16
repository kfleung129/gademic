import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./NavBar";
import Home from './Home';
import Login from './Login';
//Chakra UI
import { ChakraProvider } from '@chakra-ui/react' 


var PATHNAME = window.location.pathname

if(window.location.pathname === '/'){
  ReactDOM.render(
    <ChakraProvider>
      <NavBar/>
      <Home/>
    </ChakraProvider>,
    document.getElementById('root')
  ); 
}
else if(window.location.pathname === '/login/'){
  ReactDOM.render(
    <ChakraProvider>
      <NavBar/>
      <Login/>
    </ChakraProvider>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
