import React from 'react'

const Pagination = (props) => {
    const { pageSize, itemsCount, currentPage, onPageClicked } = props;
    console.log('page size', pageSize, 'total number of items', itemsCount);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    console.log('pages count', pagesCount);
    if(pagesCount === 1){
        return null;
    }
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
                        <a className="page-link" onClick={() => onPageClicked(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;