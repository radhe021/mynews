/* eslint-disable import/extensions */
/** @format */
import React from 'react';

import './App.css';

import { useReducer } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import CardGrid from './components/CardGrid';
import Home from './components/Home';
import  International  from './components/International';
import Layout from './components/Layout/Layout';
import  Province  from './components/Province';
import SearchNews from './components/SearchNews';
import Technology from './components/Technology';
import { initialState } from './store/initialState';
import rootReducer from './store/reducer';
import StoreContext from './store/StoreContext';


function App() {

  // console.log('state is', state);
  const [state, dispatch] = useReducer(rootReducer, initialState);
	
  return (
		<div className="App font-face-helvetica">
			<StoreContext.Provider value={[ state, dispatch ]} >
				<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/india" component={Home}></Route>
						<Route exact path="/province" component={Province}></Route>
						<Route exact path="/international" component={International}></Route>
						<Route exact path="/tech" component={Technology}></Route>
						<Route exact path="/SearchNews" component={SearchNews}></Route>
					</Switch>
					</Layout>
				</Router>	
				</StoreContext.Provider>		
		</div>
  );
}

export default App;
