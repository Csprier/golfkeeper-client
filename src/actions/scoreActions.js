export const ADD_STROKE_TO_TOTAL = 'ADD_STROKE_TO_TOTAL';
export const addStrokeToTotal = (stroke) => ({
  type: ADD_STROKE_TO_TOTAL,
  stroke
});

export const REMOVE_STROKE_TO_TOTAL = 'REMOVE_STROKE_TO_TOTAL';
export const removeStrokeToTotal = (stroke) => ({
  type: REMOVE_STROKE_TO_TOTAL,
  stroke
})