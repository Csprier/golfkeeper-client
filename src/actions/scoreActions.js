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
export const addStrokeToHole = (score) => ({
  type: ADD_STROKE_TO_HOLE,
  score
});
// ================================================================ \\
export const REMOVE_STROKE_FROM_HOLE = 'REMOVE_STROKE_FROM_HOLE';
export const removeStrokeFromHole = (score) => ({
  type: REMOVE_STROKE_FROM_HOLE,
  score
});
// ================================================================ \\