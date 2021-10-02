import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { ChakraProvider } from "@chakra-ui/react";
import { surveyContext } from "./store";

export default function App() {
  //console.log(surveyContext);
  const context = useContext(surveyContext);
  console.log(context);
  //console.log(context);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Results() {
  return <h2>Resultss</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
