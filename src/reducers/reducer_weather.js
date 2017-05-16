import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // 'return [ action.payload.data ].concat(state);'. dont do state.push (need new array)
    return [ action.payload.data, ...state ]; //new record gets inserted to front of array
  }
  return state;
}
