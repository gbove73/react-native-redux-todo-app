import React from 'react';
import {createStore} from 'redux';
import rootReducer from './state/reducers';
import {Provider} from 'react-redux';
import Main from './components/Main';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}