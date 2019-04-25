import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reduxStore from './store';

import './styles/index.scss';

import HeaderContainer from './components/containers/HeaderContainer';
import Footer from './components/views/Footer';
import Landing from './components/views/Landing';
import LoginContainer from './components/containers/LoginContainer';
import SignupContainer from './components/containers/SignupContainer';
import ProfileContainer from './components/containers/ProfileContainer';
import CreateReportContainer from './components/containers/CreateReportContainer';

const { store, persistor } = reduxStore;


/**
 * The main entry point of the application
 * @returns {object} The generated JSX object
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <>
            <HeaderContainer />
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/login" component={LoginContainer} exact />
              <Route path="/sign-up" component={SignupContainer} exact />
              <Route path="/profile" component={ProfileContainer} exact />
              <Route path="/create-report" component={CreateReportContainer} exact />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
