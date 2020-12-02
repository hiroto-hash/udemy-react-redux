import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//Reduxが管理する状態の内、どの要素をコンポーネントは参照したいのか？を定義する必要があります。
//以下の処理によってコンポーネントの関心の対象を必要十分なスコープに絞っています。
const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
