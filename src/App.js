import React, { Component } from 'react';

const App = () => {
  return (
    <Counter></Counter>
  )
};

class Counter extends Component {
  //初期化処理
  constructor(props) {
    super(props)
    //countの初期設定
    this.state = { count: 0 }
  }
  //＋1する
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  //−１する
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <React.Fragment>
        {/* 表示するカウンタ */}
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    )
  }
}
export default App;
