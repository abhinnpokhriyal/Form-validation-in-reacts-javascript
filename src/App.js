import Signup from "./Signup";
import { Router, Routes, Route, Redirect } from "react-router-dom";
import './App.css';
import Logout from "./Logout";

function App() {
  <Router>
      <Routes>
      <Route exact path="/" component={Signup}/>
      <Route exact path="/Logout" component={Logout}/>
      </Routes>
  </Router>
  return <div className="App"> 
    <Signup />
  </div>
}

export default App;
