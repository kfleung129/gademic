import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Login from './Login';
import { ChakraProvider } from '@chakra-ui/react' 

var PATHNAME = window.location.pathname

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/gademic" element={<Home/>}/>
        <Route path='/gademic/login/' element={<Login/>}/>
      </Routes>
  </BrowserRouter>
  ,
  document.body
); 




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
