import { GET_LOCATION, LOGIN, TOGGLE_THEME } from './actionType';
import { initialState } from './initialState';
// const initialState = {
//   isLoggedIn:false,
//   country:'india',
//   state:'delhi',
//   theme:'light',
// };

function rootReducer({ action, state = initialState }) {
  switch (action.type ) {
    case LOGIN:
      return (
        {
          ...state,
          isLoggedIn:true,
        }
      );
    case TOGGLE_THEME:
      return (
        {
          ...state,
          theme: state.theme === 'dark' ? 'light' : 'dark',
        }
      );
    case GET_LOCATION:
      return (
        {
          ...state,
          state: state.state,
          country:state.country,
        }
      );
    default:
      return (
        {
          ...state,
        }
      );
  }
}
export default rootReducer;