import React, { useState, useContext } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  // useContext
  const { state, dispatch } = useContext(AppContext);
  // useState
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 一覧に追加
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
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
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  // 作成ボタンのdisabled制御
  const unCreatable = title === '' || body === '';

  return (
    <>
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
    </>
  );
};

export default EventForm;
