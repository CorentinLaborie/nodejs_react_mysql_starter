// Modules //
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components //
import Welcome from './components/Welcome/Welcome';
// Stylesheets // 
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={()=>{return <Welcome />}} />
      </Router>
    </>
  );
}

export default App;

