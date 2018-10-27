import { ADD_STROKE } from '../actions/scoreActions';

export const initialState = {
  course: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
  score: 0
}

export default (state = initialState, action) => {
  if (action.type === ADD_STROKE) {
    return Object.assign({}, state, {
      score: action.score
    })
  }
  return state;
}