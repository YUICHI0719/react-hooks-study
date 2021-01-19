import React, { useContext } from "react";

import { DELETE_EVENT, ADD_OPERATION_LOGS } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const Event = ({ event }) => {
  // useContext
  const { dispatch } = useContext(AppContext);

  const id = event.id;

  // クリックしたTODOを削除
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `ID:${id} のTODOを削除します。よろしいでしょうか？`
    );
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id: id,
      });
      dispatch({
        type: ADD_OPERATION_LOGS,
        description: `ID:${id} のTODOを削除しました。`,
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
