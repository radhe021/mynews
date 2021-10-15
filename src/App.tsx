import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Searchbar from "./components/Searchbar";
import Layout from './components/Layout';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App font-face-helvetica">
      <Layout>
      <Router>
      <Switch>
          <Route exact path="/" component={Searchbar} >
          </Route>
          <Route exact path="/s" component={CardGrid} >
          </Route>
        </Switch>
        </Router>
        </Layout>
    </div>
  );
}

export default App;
