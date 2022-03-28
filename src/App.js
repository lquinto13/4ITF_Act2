import React from 'react'
import RPSLS from './components/RPSLS';
import Rules from './components/Rules';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
  return (
    <div>
      <Rules />
      <RPSLS />
    </div>
  )
}

export default App