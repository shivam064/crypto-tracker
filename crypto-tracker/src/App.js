import React, { useEffect } from 'react';
import { CryptoSimulator } from './features/crypto/simulateUpdates';
import { store } from './redux/store';
import CryptoPrice from './components/CryptoPrice';
import './App.css';

function App() {
  useEffect(() => {
    const simulator = new CryptoSimulator(store);
    simulator.start();
    return () => simulator.stop();
  }, []);

  return (
    <div className="App">
      <h1>CRYPTO TRACKER</h1>
      <CryptoPrice />
    </div>
  );
}

export default App;