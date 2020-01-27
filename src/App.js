import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './modules/auth/components/login.component';
import NewUser from './modules/auth/components/newuser.component';
import Projects from './modules/projects/components/projects.component';

const App = () => {
  return (
    <Router>
    <div className="container">
       <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route exact path="/newuser" component={NewUser}></Route>
         <Route exact path="/projects" component={Projects}></Route>
       </Switch>
   </div>
  </Router>
  );
}

export default App;
