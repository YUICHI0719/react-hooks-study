import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container'>
      <h4>TODO管理</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' />
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>詳細</label>
          <textarea className='form-control' id='formEventBody' />
        </div>
        <button className='btn btn-primary'>TODOを作成する</button>
        <button className='btn btn-danger'>全てのTODOを削除する</button>
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
