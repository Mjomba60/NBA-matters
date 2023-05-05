import './App.css';
import {Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar';
import Players from "./components/Players";
import Teams from "./components/Teams";
import Games from "./components/Games"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NBA Matters
      </header>
      <NavBar />
      <Switch>
        <Route path ="/teams">
          <Teams />
        </Route>
        <Route path='/games'>
          <Games />
        </Route>
        <Route exact path = "/">
          <Players />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
