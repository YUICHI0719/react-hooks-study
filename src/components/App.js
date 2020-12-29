import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';
import reducer from '../reducers/index';

const App = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, []);
  // useState
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 一覧に追加
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body,
    });
    setTitle('');
    setBody('');
  };

  // 全てのTODOを削除
  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのTODOを本当に削除してもよろしいでしょうか？'
    );
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  };

  // 作成ボタンのdisabled制御
  const unCreatable = title === '' || body === '';

  return (
    <div className='container'>
      <h4>TODO管理</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input
            className='form-control'
            id='formEventTitle'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>詳細</label>
          <textarea
            className='form-control'
            id='formEventBody'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className='btn btn-primary'
          onClick={addEvent}
          disabled={unCreatable}
        >
          TODOを作成する
        </button>
        <button
          className='btn btn-danger'
          onClick={deleteAllEvent}
          disabled={state.length === 0}
        >
          全てのTODOを削除する
        </button>
      </form>

      <h4>TODO 一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
