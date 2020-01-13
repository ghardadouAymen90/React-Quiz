import React from 'react';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { Router, Route } from "react-router-dom";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import store from "./Redux/store";
import AppLayout from './Components/appLayout'
import './App.css';


function App() {
  const hist = createBrowserHistory();
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={hist} basename={'/QCM'}>
          <Route path="/" component={AppLayout} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
