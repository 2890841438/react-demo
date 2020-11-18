import Home from './pages/Home';
import Mine from './pages/Mine';
import Nav from './components/Nav'
import UCenter from './pages/UCenter'
import NotFound from './pages/NotFound'
import Demo from './pages/Demo'
import Book from './pages/Book'
import JavaBook from './pages/JavaBook'
import WebBook from './pages/WebBook'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect from='/hellomine' to='/mine'></Redirect>
          <Route exact path='/home' component={Home} ></Route>
          <Route exact strict path='/mine' component={Mine} ></Route>
          <Route exact strict path='/mine/ucenter/:id?/:name?' component={UCenter}></Route>
          <Route path='/demo' render={(props) => <Demo {...props} name="你好" />}></Route>
          <Book path='/book'>
            <Switch>
              <Route path='/book/javabook' component={JavaBook}></Route>
              <Route path='/book/webbook' component={WebBook}></Route>
            </Switch>
          </Book>

          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
