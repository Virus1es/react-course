import React from 'react';
import {usePagination} from "../../../hooks/usePosts.js";
import cl from './Paginator.module.css';

const Paginator = (props) => {
    const { totalPages, page, changePage } = props;

    let pagesArray = usePagination(totalPages);

    return (
        <div className={cl.page__wrapper}>
            {
                pagesArray.map(p => {
                    const classes = [cl.page];
                    if(page === p) classes.push(cl.page__current);

                    return (
                        <span
                            onClick={() => changePage(p)}
                            key={p}
                            className={classes.join(' ')}
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