import React from 'react';
import _ from "lodash";

const pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);


  return (
    <nav className=" mr-5">
      <ul className="pagination pagination-primary mb-0 ">

        {pages.map(page => (

          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}><a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>
        ))}

      </ul>
    </nav>
  );
}
export default pagination;
