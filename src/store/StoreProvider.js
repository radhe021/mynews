import { useReducer } from 'react';

import initialState from './initialState';
import rootReducer from './reducer';
import StoreContext from './StoreContext';

export const StoreProvider = (props) => {

  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};
