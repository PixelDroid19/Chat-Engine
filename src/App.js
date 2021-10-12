import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./useContext/AuthContext";
import Login from "./components/Login";
import Chats from "./components/Chats";




const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
             <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App