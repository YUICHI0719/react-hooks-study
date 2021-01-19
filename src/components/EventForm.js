import React, { useState, useContext } from "react";

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOGS,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  // useContext
  const { state, dispatch } = useContext(AppContext);
  // useState
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 一覧に追加
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title: title,
      body: body,
    });
    dispatch({
      type: ADD_OPERATION_LOGS,
      description: "TODOを作成しました。",
      operatedAt: timeCurrentIso8601(),
    });
    setTitle("");
    setBody("");
  };

  // 全てのTODOを削除
  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのTODOを本当に削除してもよろしいでしょうか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_OPERATION_LOGS,
        description: "全てのTODOを削除しました。",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  // 全ての操作ログを削除
  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全ての操作ログを本当に削除してもよろしいでしょうか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_OPERATION_LOGS });
    }
  };

  // 作成ボタンのdisabled制御
  const unCreatable = title === "" || body === "";

  return (
    <>
      <h4>TODO管理</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">詳細</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          TODOを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvent}
          disabled={state.events.length === 0}
        >
          全てのTODOを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
