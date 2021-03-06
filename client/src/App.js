import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Company from './components/Company';
import ReviewForm from './components/Review/ReviewForm';
import Error from './components/Error';

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route exact path="/"
            component={Home}
          />
          <Route path="/companies/add"
            component={ReviewForm}
          />
          <Route path="/companies/:name" 
            component={Company} 
          />
          <Error msg=""/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
