import React, { Component } from 'react';
//import { connect } from 'react-redux';

import Menu from '../components/menu';
import Header from '../components/header';

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}

//export default connect(state => state)(Home);
