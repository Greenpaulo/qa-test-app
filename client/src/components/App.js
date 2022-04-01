import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import '../css/style.min.css'

import Navbar from './Navbar';
import HowToUse from './HowToUse';
import Landing from './Landing';
import Finder from './Finder';
import MateriaMedica from './MateriaMedica';
import Dispensary from './Dispensary'
import Cabinet from './Cabinet';
import Edit from './EditMedicine';
import PrivateRoute from './routing/PrivateRoute';
import Login from './Login';
// import About from './About';
import References from './References';
import Terms from './Terms';
import Test from './Test';

import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Landing} />
          {/* <Route path='/how_to_use' component={HowToUse} /> */}
          <Route path='/herb_finder' component={Finder} />
          <Route exact path='/materia_medica' component={MateriaMedica} />
          <Route path='/materia_medica/:herb' component={MateriaMedica} />
          <Route path='/dispensary' component={Dispensary} />
          {/* <PrivateRoute path='/cabinet' component={Cabinet} /> */}
          {/* <Route path='/about' component={About} /> */}
          {/* <PrivateRoute path='/edit_medicine' component={Edit} /> */}
          <Route path='/login' component={Login} />
          <Route path='/references' component={References} />
          <Route path='/terms' component={Terms} />
          <Route path='/test' component={Test} />
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
