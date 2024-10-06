
import { useTable, useRowSelect, useFlexLayout, Column } from 'react-table';
import { classNames } from '../utils';

const Table = ({
  columns,
  data,
  initialState,
  isBorderFirstColum = false,
  emptyContent = 'No data',
  onClickRow,
  onDoubleClickRow,
  rowSelected,
}: {
  columns: Column<any>[];
  data: any;
  initialState?: any;
  noBorder?: boolean;
  isBorderFirstColum?: boolean;
  emptyContent?: string;
  onClickRow?: (e?: any) => void;
  onDoubleClickRow?: (e?: any) => void;
  rowSelected?: any;
  isTableInfinity?: boolean;
  emptyIcon?: any,
  classEmpty?: any
}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = useTable(
      {
          columns,
          data,
          initialState,
      },
      useRowSelect,
      useFlexLayout,
  );

  const renderTbody = () => {
      if (!data?.length) {
          return (
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                  {emptyContent}
              </div>
          );
      }
      const element = rows.map((row: any, index: number) => {
          const tmp: any = { ...row.original };
          prepareRow(row);
          return (
              <tr
                  key={`row_${index}`}
                  className={classNames('hover:bg-gray-50 items-center relative', rowSelected && rowSelected?.id === tmp.id ? 'bg-gray-50' : '',)}
                  {...row.getRowProps()}
                  onClick={() => onClickRow?.(row.original)}
                  onDoubleClick={() => onDoubleClickRow?.(tmp.id)}
              >
                  {row.cells.map((cell: any, cellIndex: number) => {
                      return (
                          <td
                              key={cellIndex}
                              className={classNames(cellIndex == 0 && isBorderFirstColum ? 'border-r' : '',
                                  cell?.column?.sticky === 'left' || cell?.column?.sticky === 'right'
                                      ? 'table-cell-sticky'
                                      : ''
                              )}
                              {...cell.getCellProps()}
                          >
                              {cell.render('Cell')}
                          </td>
                      );
                  })}
              </tr>
          );
      });
      return element;
  };

  return (
      <div className="table-container h-full relative">
          <table className="w-full h-full " {...getTableProps()}>
              <thead className='sticky top-0  bg-white z-[4]'>
                  {headerGroups.map((headerGroup: any, index: number) => {
                      return (
                          <tr className='bg-gray-50 border-t border-t-gray-300' key={`header_${index}`} {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column: any, index: number) => {
                                  return (
                                      <th
                                          key={index}
                                          className={classNames(
                                              index == 0 && isBorderFirstColum
                                                  ? 'border-t-0 border-r py-2'
                                                  : 'border-t-0 py-2',
                                             
                                          )}
                                          {...column.getHeaderProps()}
                                      >
                                          {column.render('Header')}
                                      </th>
                                  );
                              })}
                          </tr>
                      );
                  })}
              </thead>
              <tbody {...getTableBodyProps()}>{renderTbody()}</tbody>
          </table>
      </div>
  );
};

export default Table;
