/* eslint-disable no-undef */

import { GET_LOCATION, LOGIN, TOGGLE_THEME } from './actionType';

export const Login = ()=> {
  dispatch({ type : LOGIN });
};

export const getCurrentLocation = ( state ) =>{
  dispatch({ type : GET_LOCATION, state:state });
};

export const toggleTheme = () =>{
  dispatch({ type : TOGGLE_THEME });
};