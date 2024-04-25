import Navbar from './nav.js';
import Home from './home.js';
import Home2 from './home2.js';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Home />
     </div>
     <div className="content"> 
      <Home2 />
     </div>
    </div>
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