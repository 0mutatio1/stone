import React, { FC } from 'react';
import "./index.scss";

interface ColumnObj {
  label: any;
  key: string;
  width?: number;
  consumerSlot?: any;
}

interface Properties {
  key?: string,
  data?: Array<any>,
  columns?: Array<ColumnObj>,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defualtProperties = {
  key: 'index',
  data: [],
  columns: [],
  onClick: undefined,
};

export const NormalTable: FC<Properties> = ({ key = 'index', data = [], columns = [], onClick }) => {

  return (
    <>
        <table className='stone-table'>
            <thead className='stone-table-head'>
                <tr className='stone-table-head__row'>
                  {
                    columns.map((column, cid) => (
                      <th key={(cid + Math.random()) * Math.random()}  className='stone-table-head__row_cell'>{column.label}</th>
                    ))
                  }
                </tr>
            </thead>
            <tbody className='stone-table-body'>
              {
                data.map((item: any, index) => (
                    <tr key={key === 'index' ? index : item[key]} className='stone-table-body__row'>
                      {
                        columns.map((column, cid) => (
                          <td key={(cid + Math.random()) * Math.random()} className='stone-table-body__row_cell'>{item[column.key]}</td>
                        ))
                      }
                  </tr>
                ))
              }
            </tbody>
        </table>
    </>
  )
};

NormalTable.defaultProps = defualtProperties;

export default NormalTable;
