export default (state = {showLoader:false}, action) => {
  switch (action.type) {
   case 'TOGGLE_LOADER':
    return {
     showLoader: action.payload
    }
   default:
    return state
  }
}