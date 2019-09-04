import React from 'react';
import ReactDOM from 'react-dom';

import { sfAuth, onConnect } from './services/salesforce';

const App = () => {
  onConnect();
  return <>
    <button onClick={sfAuth}>Login</button>
  </>;
}

ReactDOM.render(<App />, 
  document.getElementById('app')
);
