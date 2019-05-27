import { FETCH_CURRENT_USER } from "../actions";

export default (state = null, action) => {
  // console.log('Reducer running with action', action)
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
