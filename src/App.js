import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Creation from './pages/creation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Creation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
