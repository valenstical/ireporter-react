import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
import reduxStore from './store';

const { store } = reduxStore;

/**
 * @constant store - the persisted store
 * @constant persistor - the persistor function from redux-persist
 * @function App - the wrapped App imported from the routes
 * @returns {JSX} - The wrapped app's JSX
 */
function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
