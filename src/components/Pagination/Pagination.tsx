import React from 'react';
import ReactPaginate from 'react-paginate';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';

interface TablePaginationProps {
    total: number;
    perPage: number;
    onClickPagination: any;
    forcePage?: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({
    total,
    perPage,
    onClickPagination,
    forcePage,
}) => {
    return (
        <ReactPaginate
            forcePage={forcePage}
            previousLabel={<ArrowLeftIcon />}
            nextLabel={<ArrowRightIcon />}
            breakLabel={'...'}
            pageCount={total ? Math.ceil(total / perPage) : 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => onClickPagination(e.selected + 1)}
            containerClassName={'pagination'}
        />
    );
};

export default TablePagination;
