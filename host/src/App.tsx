import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ControlPanel = React.lazy(() => import('dashboard/ControlPanel'));

import { Layout } from './Layout';
import { Home } from './Home';
import { NoMatch } from './NoMatch';

import './app.css';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<ControlPanel />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
