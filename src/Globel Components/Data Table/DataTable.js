import React from 'react';
import { useTable, usePagination } from 'react-table';
import './DataTable.scss'

const GenericTable = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 17 } }, usePagination)

  console.log(headerGroups)
  return (
    <div className='data-table'>
      <table {...getTableProps()} className="table">
        <thead className='tableHeader'>
          {headerGroups.map((headerGroup) => (
            <tr className='tableRow' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th style={{minWidth:column.minWidth,width:column.minWidth}} className='tableHeaderCell' {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        {data && data.length>0 && (
    <tbody className='rowGroup' {...getTableBodyProps()}>
    {page.map((row) => {
      prepareRow(row);
      return (
        <tr className='tableRow' {...row.getRowProps()}>
          {row.cells.map((cell) => {
            console.log('cell',cell)
            return(
              <td style={{minWidth:cell.column.minWidth,width:cell.column.minWidth}} className='tableCell' {...cell.getCellProps()}>{cell.render('Cell')}</td>
            )
          })}
        </tr>
      );
    })}
  </tbody>
        )}
    {(!data || data.length===0 ) && (
    <div className='noRows'>No Data Avalible</div>
    )}
    
      
      </table>

      <div className="pagination">
        {/* <button>{`<`}</button> */}
        <button className='paginantionBtn' onClick={() => previousPage()} disabled={!canPreviousPage}>
    {'<'}
        </button>
        <div>{`Page  ${pageIndex + 1} of ${pageOptions.length}`}</div>
        {/* <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span> */}
        <button className='paginantionBtn' onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
        </button>
      </div>
    </div>
  );
};

export default GenericTable;
