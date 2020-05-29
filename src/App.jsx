import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div className='py-5 px-16'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
