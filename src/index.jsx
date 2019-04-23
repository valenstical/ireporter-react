import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reduxStore from './store';

const { store } = reduxStore;

/**
 * @constant store - the persisted store
 * @function App - the wrapped App imported from the routes
 * @returns {JSX} - The wrapped app's JSX
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Switch>
            <Route path="*" />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
