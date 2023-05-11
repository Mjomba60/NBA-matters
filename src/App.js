import './App.css';
import {Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar';
import Players from "./components/Players";
import Teams from "./components/Teams";
import Games from "./components/Games"
import Details from './components/Details';
import { useEffect, useState } from 'react';

function App() {
  const [obj, setObj] = useState({})
  const [origin, setOrigin] = useState("")
  useEffect(()=> {setObj(obj)},[obj])


  //grab object to be used by the details info component
  function selectObj(object){
    setObj({...object})
  }

  //grab origiof the request where data was received from
  function selectOrigin(root){
    setOrigin(root)
  }
  return (
    <div className="App">
      <header className="App-header">
        NBA Matters
      </header>
      <NavBar />
      <div className='searchNdetails'>
      <Switch>
        <Route exact path ="/teams">
          <Teams selectObj ={selectObj} selectOrigin = {selectOrigin}/>
        </Route>
        <Route exact path='/games'>
          <Games selectObj ={selectObj} selectOrigin = {selectOrigin}/>
        </Route>
        <Route  path = "/">
          <Players selectObj ={selectObj} selectOrigin = {selectOrigin}/>
        </Route>
      </Switch>
      <Details obj={obj} origin ={origin}/>
      </div>
    </div>
  );
}

export default App;
