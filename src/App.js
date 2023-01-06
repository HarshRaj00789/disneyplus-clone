
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
