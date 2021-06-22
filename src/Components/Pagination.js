import React from 'react';

const Pagination = ({ next }) => {
  return (
    <div className="pagination">
      {next ? (
        <button className="loadMoreButton" onClick={next}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
