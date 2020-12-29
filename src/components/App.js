import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers/index';
import AppContext from '../contexts/AppContext';

const App = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
