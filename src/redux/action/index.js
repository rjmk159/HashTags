export const toggleLoader = (status) => dispatch => {
  dispatch({
   type: 'TOGGLE_LOADER',
   payload: status
  })
 }