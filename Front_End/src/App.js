import React , {useState} from 'react';

import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegisterationForm';
import LoginForm from './Components/LoginForm/LoginForm'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Alert from './Components/Alert/Alert';
import AddCategoryItem from './Components/AddCategory-Item/AddCategory-Item';
import Menu from './Components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Menu showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/signUp">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/signIn">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Admin/AddCategory-Item">
              <AddCategoryItem showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          <Alert errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  )
}

export default App;