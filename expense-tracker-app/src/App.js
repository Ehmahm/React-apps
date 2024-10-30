// src/App.js
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <ExpenseTracker />
    </div>
  );
}

export default App;
