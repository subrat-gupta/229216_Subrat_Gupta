import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import List from './component/List';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route path="/list" component={List}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
