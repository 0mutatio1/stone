import React, { useState, FC } from 'react';
import NormalTable from './normal-table';
import "./index.scss";

function STable() {
  const columns = [
    { label: '姓名', key: 'name' },
    { label: '爱好', key: 'favorite' },
    { label: '昵称', key: 'nickName' },
    { label: '地址', key: 'address' },
  ];
  const data = [
    { name: 'Friend', favorite: 'ball', nickName: 'we', address: 'Xxxx-xxx-xx' },
    { name: 'Peter', favorite: 'ball', nickName: 'we', address: 'Xxxx-xxx-xx' },
    { name: 'Mary', favorite: 'computer', nickName: 'SC', address: 'Xxxx-xxx-xx' },
  ];

  return (
    <div className="stone-container">

      <div className="stone-container__item">
        <div className='stone-container__item_title'>default table</div>
        <div className='stone-container__item_content'>
          <NormalTable columns={columns} data={data} />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>table</div>
        <div className='stone-container__item_content'>
        </div>
      </div>

    </div>
  );
}

export default STable;
