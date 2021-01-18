import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import reducer from "../reducers/index";
import AppContext from "../contexts/AppContext";

const App = () => {
  // stateの初期値を変数化
  const initialState = {
    events: [],
    operationLogs: [],
  };

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
