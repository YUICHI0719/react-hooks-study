import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import reducer from "../reducers/index";
import AppContext from "../contexts/AppContext";

const App = () => {
  // stateの初期値を変数化(localStorageに値がある場合は格納)
  const appState = localStorage.getItem("appWithRedux");
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect
  useEffect(() => {
    localStorage.setItem("appWithRedux", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
