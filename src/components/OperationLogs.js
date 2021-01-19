import React, { useContext } from "react";

import OperationLog from "./OperationLog";
import AppContext from "../contexts/AppContext";

const OperationLogs = () => {
  // useContext
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ 一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>操作内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
