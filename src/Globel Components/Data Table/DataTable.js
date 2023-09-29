import React, { useEffect, useLayoutEffect } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import './DataTable.scss'
import { useImmer } from 'use-immer';
import { ascSortIcon, dscSortIcon, sortBtnIcon } from '../../Globel Utils/Icons';

const isColumnAvailibe = (filterColumn, columnList) => {
  let isValid = columnList.some((col) => col.accessor === filterColumn)
  return isValid
}

const DataTable = ({ data, columns, id, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable({
    columns,
    data,
  }, useFilters, useSortBy);

  const [columnFilter, setColumnFilter] = useImmer({})

  useLayoutEffect(() => {
    setColumnFilter({})
  }, [id])

  useEffect(() => {
    console.log(columnFilter, data)
    Object.entries(columnFilter).forEach(([filterColumn, filterValue]) => {
      if (isColumnAvailibe(filterColumn, columns)) {
        setFilter(filterColumn, filterValue)
      }
    })
  }, [columnFilter, data])


  const handleFilerChanger = (filterColumn, filterValue) => {
    setColumnFilter((prev) => {
      prev[filterColumn] = filterValue
    })
  }

  return (
    <>
      {loading ? (
        <div className=' centerTableInfo'>
          <div className='loader'></div>
        </div>
      ) : (
        <>
          <table {...getTableProps()} >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => {
                    const valueId = column.id
                    return (
                      <th  {...column.getHeaderProps()} >
                        {column.render('Header')}
                        <div className='coluInfoHeader'>
                          <input key={valueId + id} placeholder={`Search ${column.render('Header')}`} className='filterInput' value={columnFilter?.[valueId] ?? ''} onChange={(e) => { handleFilerChanger(valueId, e.target.value) }} />
                          <span className={`${column.isSorted ? (column.isSortedDesc ? "sort-desc" : "sort-asc") : ""}`}  {...column.getHeaderProps(column.getSortByToggleProps())}>{column.isSorted ? (column.isSortedDesc ? ascSortIcon : dscSortIcon) : sortBtnIcon}</span>
                        </div>
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>

            {rows.length > 0 && (<tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>)}
          </table>
          {rows.length === 0 && (
            <div className='centerTableInfo'><span>No Data Available....</span></div>
          )}
        </>
      )
      }
    </>

  );
};

export default DataTable;