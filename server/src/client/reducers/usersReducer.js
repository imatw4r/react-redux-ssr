import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  // console.log('Reducer running with action', action)
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}