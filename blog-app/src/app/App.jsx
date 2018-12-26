import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";

import { history } from "../helpers";
//import { alertActions } from "../actions";
//import { HomePage } from "../pages";
import testPage from "../pages/testPage"

class App extends Component {
constructor(props) {
  super(props);

  const { dispatch } = this.props;
}

render() {
  const { alert } = this.props;
  return (
    <div>
      <Router history={history}>
        <div>
          <Route exact path="/" component={testPage} />
{/*          <Route path="/profile" component={<h1>page2</h1>} />
          <Route path="/about" component={<h1>page3</h1>} />
*/}
        </div>
      </Router>
    </div>
  );
}
}

function mapStateToProps(state) {
//  const { alert } = state;
  return {
//    alert
  }; 
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
