import { ADD_STROKE_TO_TOTAL, REMOVE_STROKE_TO_TOTAL, ADD_STROKE_TO_HOLE, REMOVE_STROKE_FROM_HOLE } from '../actions/scoreActions';

export const initialState = {
  course: [
    {
      hole: 1,
      score: 0
    },
    {
      hole: 2,
      score: 0
    },
    {
      hole: 3,
      score: 0
    },
    {
      hole: 4,
      score: 0
    },
    {
      hole: 5,
      score: 0
    },
    {
      hole: 6,
      score: 0
    },
    {
      hole: 7,
      score: 0
    },
    {
      hole: 8,
      score: 0
    },
    {
      hole: 9,
      score: 0
    },    
    {
      hole: 10,
      score: 0
    },
    {
      hole: 11,
      score: 0
    },
    {
      hole: 12,
      score: 0
    },
    {
      hole: 13,
      score: 0
    },
    {
      hole: 14,
      score: 0
    },
    {
      hole: 15,
      score: 0
    },
    {
      hole: 16,
      score: 0
    },
    {
      hole: 17,
      score: 0
    },
    {
      hole: 18,
      score: 0
    }
  ],
  total: 0
}

// ================================================================ \\
export default (state = initialState, action) => {
  if (action.type === ADD_STROKE_TO_TOTAL) {
    return Object.assign({}, state, {
      ...state,
      total: state.total + 1
    })
  }

  if (action.type === REMOVE_STROKE_TO_TOTAL) {
    return Object.assign({}, state, {
      ...state,
      total: state.total - 1
    })
  }

  /**
   * THE NEXT TWO ACTIONS ARE NOT UPDATING THE CORRECT PART OF THE STATE.
   * They need to update the course.specific-hole.score
   */
  if (action.type === ADD_STROKE_TO_HOLE) {
    return Object.assign({}, state, {
      ...state      
    });
  }

  if (action.type === REMOVE_STROKE_FROM_HOLE) {
    return Object.assign({}, state, {
      ...state
    });
  }
  return state;
}