import React from 'react';
import {createStore} from 'redux';
import rootReducer from './state/reducers';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import Main from './components/Main';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Main/>
          </PersistGate>
        </Provider>
    );
  }
}