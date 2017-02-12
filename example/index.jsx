import React from 'react';
import ReactDOM from 'react-dom';

import Tooltip from '../src';

ReactDOM.render(
  <Tooltip tooltip={(<span>tooltip</span>)}>
    <span>example</span>
  </Tooltip>,
  document.getElementById('root'),
);
