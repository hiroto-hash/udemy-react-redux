import { CREATE_EVENTS, READ_EVENTS, DELETE_EVENTS, READ_EVENT, UPDATE_EVENT } from '../actions';
import _ from 'lodash'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case READ_EVENTS:
    case UPDATE_EVENT:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
      delete events[action.id]
      return { ...events }
    case READ_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }


    default:
      return events
  }
}