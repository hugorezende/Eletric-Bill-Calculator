import React, { useState } from "react";
import { createStore } from "redux";
import { Provider,useDispatch } from "react-redux";
import rootReducer from "./redux/reducers";

import "./App.css";
import styled from "styled-components";
import TotalSpends from "./Components/TotalSpends/TotalSpends";
import ListEquipments from "./Components/ListEquipments/ListEquipments";
import Summary from "./Components/Summary/Summary";


function App() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
    return (
    <Provider store={store}>
      <div>
        <Wrapper>
          <TotalSpends />
          <ListEquipments />
          <Summary />
        </Wrapper>
      </div>
    </Provider>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default App;
