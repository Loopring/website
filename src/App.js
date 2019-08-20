import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {Button} from 'react-bulma-components/full';

function App() {
  return (
    <Button
      renderAs="a"
      href="https://alligator.io"
      color="danger"
      size="large"
      rounded
      outlined
    ></Button>
  );
}

export default App;
