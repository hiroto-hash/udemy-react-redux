import { READ_EVENTS } from '../actions';
//指定した値をkeyにできる
import _ from 'lodash'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      //action.response.data, 'id'をkeyにしている
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}