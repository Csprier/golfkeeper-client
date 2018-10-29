// ================================================================ \\
export const ADD_STROKE_TO_TOTAL = 'ADD_STROKE_TO_TOTAL';
export const addStrokeToTotal = () => ({
  type: ADD_STROKE_TO_TOTAL
});
// ================================================================ \\
export const REMOVE_STROKE_TO_TOTAL = 'REMOVE_STROKE_TO_TOTAL';
export const removeStrokeToTotal = () => ({
  type: REMOVE_STROKE_TO_TOTAL
});
// ================================================================ \\
export const ADD_STROKE_TO_HOLE = 'ADD_STROKE_TO_HOLE';
export const addStrokeToHole = (hole) => ({
  type: ADD_STROKE_TO_HOLE,
  hole
});
// ================================================================ \\
export const REMOVE_STROKE_FROM_HOLE = 'REMOVE_STROKE_FROM_HOLE';
export const removeStrokeFromHole = (hole) => ({
  type: REMOVE_STROKE_FROM_HOLE,
  hole
});
// ================================================================ \\
export const ADD_HANDICAP = 'ADD_HANDICAP';
export const addHandicap = (handicap) => ({
  type: ADD_HANDICAP,
  handicap
});

export const ADD_HANDICAP_TO_TOTAL_SCORE = 'ADD_HANDICAP_TO_TOTAL_SCORE'
export const addHandicapToTotalScore = (handicap) => ({
  type: ADD_HANDICAP_TO_TOTAL_SCORE,
  handicap
})