import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting'

import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App;
