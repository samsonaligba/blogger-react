import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import { connect } from 'react-redux';

import { updateUser } from './actions/user-actions';

//Import Views
import Category from './views/Category'
import Home from './views/Home'
import PostDetail from './views/PostDetail'

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);

  }
  onUpdateUser(e){
    this.props.onUpdateUser(e.target.value);
  }
  render() {
    return (
      <BrowserRouter>
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/:category' component={Category} />
           <Route exact path='/:category/:post_id' component={PostDetail} />
         </Switch>
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = state => ({
   products: state.products,
   user: state.user 
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};
export default connect(mapStateToProps, mapActionsToProps) (App);
