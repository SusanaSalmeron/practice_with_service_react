import './App.css';
import ChapterList from './components/ChapterList';
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
          component={ChapterList} />
      </Router>

    </div>
  );
}

export default App;
