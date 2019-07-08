import React from 'react';
import { Global } from '@emotion/core';
import ReactDOM from 'react-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Hey This app is Running</h1>
      <Global styles={getGlobalCSS()} />
    </div>
  );
}

function getGlobalCSS() {
  return {
    body: {
      margin: 0
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
