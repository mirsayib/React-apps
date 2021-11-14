import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            {/* Route for homepage */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Route for create Blog */}
            <Route path="/create">
              <Create/>
            </Route>
            {/* Route for Blog Details */}
            <Route path="/blogs/:id">
              {/* Regardless of what id is, it will route to blog details */}
              <BlogDetails/>
            </Route>
            {/* Route for route that doesn't exist */}
            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
