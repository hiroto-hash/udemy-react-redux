import { INCREMENT, DECREMENT } from '../actions';

//状態の初期値
const initialState = { value: 0 }

//stateはデフォルトでは状態を持っていないので上のinitialStateを渡す
//actionは受け取ったaction(INCREMENT,DECREMENT)のtypeによって状態を変化する
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}