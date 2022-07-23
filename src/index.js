import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App/>
     </Provider>
    </BrowserRouter>
   
);


