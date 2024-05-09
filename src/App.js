import Navbar from './nav.js';
import Home from './home.js';
import Create from './create.js';
import NotFound from './notfound.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetail from './blogsdetail.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
       <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/create">
         <Create />
        </Route>
        <Route path="/blogs/:Id">
         <BlogDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
       </Switch>
     </div>
     <div className="content"> 
      
     </div>
    </div>
    </Router>
  );
}

export default App;
/* function App() {
  const a='app component'
  const u="http://www.google.com"
  return (
    <div className="App">
     <div className="content">
       <h1>{a}</h1>
       <p>{Math.random()*10}</p>
       <a href={u}>google</a>
     </div>
    </div>
  );
} */