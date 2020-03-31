import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./redux/reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import Firebase from 'firebase'
import config from './config'

import AddEquipmentTypePage from "./Pages/AddEquipmentTypePage";
import Index from "./Pages/Index";
import Header from "./Components/Header/Header";
import AddEquipmentPage from "./Pages/AddEquipmentPage";

function App() {
  Firebase.initializeApp(config)
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path="/add">
                <AddEquipmentTypePage />
              </Route>
              <Route exact path="/add/:room">
                <AddEquipmentPage />
              </Route>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </Wrapper>
        </div>
      </Router>
    </Provider>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
`;

export default App;
