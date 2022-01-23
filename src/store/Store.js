//import { useReducer } from 'react';

//import { initialState } from './initialState';
//import rootReducer from './reducer';
import StoreContext from './StoreContext';

function Store(props) {
  //const [state] = useReducer(rootReducer, initialState);
  // var x = 'lodu';
  const ass = {
    'lu':'lullu',
  };
  return (
    <div>
      <StoreContext.Provider value={{ ass }}>
           {props.children}
      </StoreContext.Provider>
    </div>
  );
}

export default Store;
