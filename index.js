import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { reducer } from "./app/reducers/reducers.js";
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// components
import { NavBar, NavLink, NavBanner } from "./app/components/ui/ui.js";
import { Main } from "./app/components/main/main.js"

let App = React.createClass({
  render() {
    let elements;
    // pass state and dispatch to path component props
    if(this.props.children) {
      elements = React.cloneElement(this.props.children, { state: this.props.state, dispatch: this.props.dispatch })
    }
    return (
      <span>
        <NavBar>
          <NavBanner text='Checkout this blog post on '
                     linkText='machine learning'
                     link='http://blog.udacity.com/2016/04/languages-and-libraries-for-machine-learning.html'
                     isExternal={true}/>
          <NavLink text="Udacity"
                   link="https://www.udactiy.com"
                   isExternal={true} />
        </NavBar>
        {elements}
      </span>
    )
  }
});

// create store
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

// connect to store
const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export const AppContainer = connect(
  mapStateToProps
)(App);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
