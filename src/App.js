import './App.css';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact path="/characters"
          component={CharacterList} />
        <Route
          exact path="/characters/:id/detail"
          component={CharacterDetail} />
      </Router>

    </div>
  );
}

export default App;
