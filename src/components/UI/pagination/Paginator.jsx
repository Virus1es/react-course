import React from 'react';
import {usePagination} from "../../../hooks/usePosts.js";

const Paginator = (props) => {
    const { totalPages, page, changePage } = props;

    let pagesArray = usePagination(totalPages);

    return (
        <div className="page__wrapper">
            {
                pagesArray.map(p => {
                    return (
                        <span
                            onClick={() => changePage(p)}
                            key={p}
                            className={page === p ? 'page page__current' : 'page'}
                        >
                                {p}
                            </span>
                    )
                })
            }
        </div>
    );
};

export default Paginator;