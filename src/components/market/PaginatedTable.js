import React, { useState, useMemo } from 'react';
import Pagination from './Paginatation';

let PageSize = 10;

export default function PaginatedTable(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log(props)
        if (props.market && props.market.length > 0) {
            return props.market.slice(firstPageIndex, lastPageIndex);
        }
        return [];
    }, [currentPage]);

    return (
        <>
            <table className='table table-sm table-striped table-dark'>
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Name</th>
                        <th scope="col">Adj Price</th>
                        <th scope="col">Avg Price</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr key={item.type_id}>
                                <td><img src={`/assets/images/Types/${item.type_id}_32.png`} alt="item"></img></td>
                                <td>{item.name}</td>
                                <td>{item.adjusted_price}</td>
                                <td>{item.average_price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={props.market.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}