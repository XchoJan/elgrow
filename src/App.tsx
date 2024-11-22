import React, { useEffect } from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';

import RootRouter from './routers/RootRouter';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);

export default App;
