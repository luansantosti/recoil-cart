import React from 'react';
import { RecoilRoot } from 'recoil';

import Products from './components/Products';
import Nav from './components/Nav';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <RecoilRoot>
        <Nav />
        <Products />
      </RecoilRoot>
    </div>
  );
}

export default App;
