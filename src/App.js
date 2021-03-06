import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SigninAndSiginUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }
  // componentWillMount() {
  //   this.unsubscribeFromAuth()
  // }
  render() {
    return (
      <div >
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SigninAndSiginUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
