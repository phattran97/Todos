import { FC } from 'react';
import TablePagination from './Pagination';

type FooterPageProps = {
    indexPage: string;
    page: number;
    per_page: number;
    total: number;
    callback: (page: number) => void;
};

const Pagination: FC<FooterPageProps> = ({ indexPage, page, per_page, total, callback }) => {

    return (
        <div className="flex items-center justify-between border-t border-gray-300 w-full">
            <p className=" font-semibold hidden lg:block">
                show {indexPage} of {total} page
            </p>
            <div className="">
                <TablePagination
                    onClickPagination={(page: number) => callback?.(page)}
                    perPage={per_page}
                    total={total}
                    forcePage={page - 1}
                />
            </div>
        </div>
    );
};

export default Pagination;
