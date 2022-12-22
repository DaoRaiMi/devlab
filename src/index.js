import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import memoryUtil from "./utils/memory"
import storeUtil from "./utils/store"

import './index.less'

let user = storeUtil.getUser()
memoryUtil.user = user

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);