
import './App.css';
import Header from './Header.js';
import InputLocation  from './InputLocation.js';
import HomeCard from './HomeCard.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FavoritePage from './FavoritePage';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <InputLocation />

      <Switch>

                <Route path="/favorite">
                    <FavoritePage />
                </Route>
            
                <Route path="/" exact>
                    <HomeCard />
                </Route>

            </ Switch>
      
    </div>
    </Router>

    

    
  );
}

export default App;
