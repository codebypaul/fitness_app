// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Welcome from './pages/Welcome';
import Navbartwo from './components/Navbartwo';
import Footer from './components/Footer';

//Pages
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Workouts from './pages/Workouts'
import Nutrition from './pages/Nutrition'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}
      <Navbartwo handleLogout={handleLogout} isAuth={isAuthenticated}/>
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          <Route path='/about' component={ About } />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser}/>
          <Route exact path="/" component={ Welcome }/>
          <Route path="/workouts" component={ Workouts }/>
          <Route path="/nutrition" component={ Nutrition }/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;