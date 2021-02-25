
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages';
import Hero from './components/Hero';


function App() {


  return (
    <Router>
      <Home/>
      <Hero/>
    </Router>
 
  );
}

export default App;
