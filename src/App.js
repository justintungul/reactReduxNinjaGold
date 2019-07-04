import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Activities from './components/containers/Activities';
import TotalGold from './components/presentation/total-gold/TotalGold';
import History from './components/presentation/history/History';

function App() {
  return (
    <div className="container">
        <TotalGold />
        <Activities />
        <History />
        <p className="mt-5 mb-3 text-muted">CodingDojo &copy; 2018</p>
    </div>
  );
}

export default App;
