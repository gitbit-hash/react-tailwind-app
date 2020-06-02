import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import { auth } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unSubscribeFromAuth();
      console.log('unmount');
    };

  }, []);

  console.log(currentUser);

  return (
    <div className='py-5 px-16'>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
        />
      </Switch>
    </div>
  );
}

export default App;
