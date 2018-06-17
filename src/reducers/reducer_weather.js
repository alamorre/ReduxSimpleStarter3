import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // Switch stateemnt for handle weather action type
  switch (action.type) {
    case FETCH_WEATHER:
      // concat makes a new instance like setState
      return state.concat([ action.payload.data ]);
    default:
      return state;
  }
  return state;
}
