import React from 'react';
import {createStore} from 'redux';
import rootReducer from './state/reducers';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Main from './components/Main';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
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