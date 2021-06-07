import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import MenuStore from './store/MenuStore';

export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider value={{
  user: new UserStore(),
  food:new MenuStore(),
  }}>
  <App />
  </Context.Provider>,
  document.getElementById('root')
  );
