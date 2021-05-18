import React, { useContext } from 'react';
import { PaginationContext } from '../context/pagination-context'

const Pagination = ({ totalitems }) => {

    const pgNum = [];
    const pagination = useContext(PaginationContext);

    let number = Math.ceil(totalitems / pagination.itemPerPage);

    for (let i = 1; i <= number; i++) {
        pgNum.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pgNum.map(num => (
                    <li key={num} className='page-item'>
                        <a onClick={() => pagination.paginate(num)} className='page-link'>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className='pagination'>
                <li>
                    <a onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage--) : () => pagination.paginate(pagination.currentPage)} className='page-link'>
                        Prev
                    </a>
                </li>

                <li>
                    <a onClick={pgNum.length != pagination.currentPage ? () => pagination.paginate(pagination.currentPage++) : () => pagination.paginate(pagination.currentPage)} className='page-link'>
                        Next
                    </a>
                </li>


            </ul>
        </nav>
    );
};

export default Pagination;