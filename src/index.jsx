import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxStore from './store';
import './styles/index.scss';

import HeaderContainer from './components/containers/HeaderContainer';
import Footer from './components/views/Footer';
import Landing from './components/views/Landing';

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <>
          <HeaderContainer />
          <Switch>
            <Route path="/" component={Landing} exact />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
