import React, { Component } from 'react';
import './MainPage.css';
import { connect } from 'react-redux';

import Balance from './Balance';
import ChoreList from './ChoreList';
import Goal from './Coin';
import { watchBalance } from '../actions/settings';
import { startGetChores } from '../actions/chores';

class MainPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.watchBalance();
    this.props.getChores();
  }

  render() {
    return (
      <div className="mainPage">
        <h1>Main page</h1>
        <Balance />
        <ChoreList />
        <Goal />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  watchBalance: () => dispatch(watchBalance()),
  getChores: () => dispatch(startGetChores())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
