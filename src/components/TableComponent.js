import React from 'react'

export const TableComponent = (props) => {
  const {
    row,
    column
  } = props
  return (
    <div className="container mt-5">
    <table className="table table-striped">
      <thead>
        <tr className="table-dark">
          {column.map((col) => (
            <th key={col.field}>{col.column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {row.map((item) => (
          <tr key={item.id}>
            {column.map((col) => (
              <td key={col.field}>{item[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default TableComponent