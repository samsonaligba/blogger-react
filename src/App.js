import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import { connect } from 'react-redux';

import { updateUser } from './actions/user-actions';


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
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          
            <input onChange = {this.onUpdateUser} />
        
          {this.props.user}
         </div>
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
