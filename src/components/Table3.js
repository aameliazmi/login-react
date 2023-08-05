// import React from 'react';
import { TableComponent } from './TableComponent';
import React, { useEffect, useState } from 'react';

export const Table3 = () => {
  const [row, setRow] = useState ([]);
  const [col, setColumn] = useState ([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then(data => {
        setRow(data.data);

        if (data.data.length > 0) {
          const firstData = data.data[0];
          const columnKeys = Object.keys(firstData);
          const newColumn = columnKeys.map(key => ({
            field: key,
            column: key.charAt(0).toUpperCase() + key.slice(1),
          }));
            setColumn(newColumn);
        }
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div>
      <h1 align="center" className="pt-5">EMPLOYEES</h1>
      <TableComponent
        row = {row}
        column = {col}
      />
    </div>
  );
};

export default Table3;