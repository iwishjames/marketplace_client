import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NeedsForm from './components/NeedsForm';
import OffersForm from './components/OffersForm';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Dashboard } />
      <Route exact path="/myneed" component={ NeedsForm } />
      <Route exact path="/myoffer" component={ OffersForm } />
    </div>
  </Router>
)

export default Routes;
