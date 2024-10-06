import React from 'react';
import Table from '../../../components/Table';
import { Row } from 'react-table';


interface ITodosTable {
  dataTable: any;
}

const TodosTable: React.FC<ITodosTable> = ({ dataTable}) => {
  
  const columns = React.useMemo(
    () => [
      {
        Header: () => <div className='text-left px-2 text-sm'>{"Task ID"}</div>,
        Cell: ({ row }: {row: Row}) => {
          return (
            <div className='text-left px-2 text-xs'>{row?.values?.id}</div>
          );
        },
        accessor: 'id',
        width: 60,
      },
      {
        Header: () => <div className='text-left px-2 text-sm'>{"todo"}</div>,
        Cell: ({ row }: {row: Row}) => {
          return (
            <div className='text-left px-2 text-xs'>{row?.values?.todo}</div>
          );
        },
        accessor: 'todo',
        width: 140,
      },
      {
        Header: () => <div className='text-left px-2 text-sm'>{"Status"}</div>,
        Cell: ({ row }: {row: Row}) => {
          return (
            <div className={`text-left text-xs px-2 py-0.5 w-fit rounded border my-1 ${row?.values?.completed? ' border-green-300 bg-green-50 text-green-500': 'border-red-300 bg-red-50 text-red-500'}`}>{row?.values?.completed ? 'Completed' : 'Incomplete'}</div>
          );
        },
        accessor: 'completed',
        width: 140,
      },
    ],
    [dataTable]
  );

  return (
    <Table data={dataTable} columns={columns} emptyContent={"Nodata"} />
  );
};

export default TodosTable;
