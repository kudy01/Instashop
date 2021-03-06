import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import home from './home';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      	const userRef = await createUserProfileDocument(userAuth);

      	userRef.onSnapshot(snapShot => {
      		setCurrentUser({
      				id: snapShot.id,
      				...snapShot.data()
      		})
      	});
      }
      else {
      	setCurrentUser(userAuth)
      }
      
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={home} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
