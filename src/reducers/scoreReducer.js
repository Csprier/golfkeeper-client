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
  
  if (action.type === ADD_STROKE_TO_HOLE) {
    const incrementScore = (course, hole) => { 
    const courseCopy = course.slice(); 
      for (let i=0; i<courseCopy.length; i++){ 
        if (courseCopy[i].hole === hole){ 
          courseCopy[i].score += 1; 
        } 
      } 
      return courseCopy; 
    };

    return Object.assign({}, state, {
      course: incrementScore(state.course, action.hole)
    });
  }

  if (action.type === REMOVE_STROKE_FROM_HOLE) {
    const decrementScore = (course, hole) => { 
    const courseCopy = course.slice(); 
      for (let i=0; i<courseCopy.length; i++){ 
        if (courseCopy[i].hole === hole){ 
          courseCopy[i].score -= 1; 
        } 
      } 
      return courseCopy; 
    };

    return Object.assign({}, state, {
      course: decrementScore(state.course, action.hole)
    });
  }
  return state;
}