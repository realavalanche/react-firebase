import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" render={() => <Login set={"column"} />} />
          <Route exact path="/signup" component={signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
