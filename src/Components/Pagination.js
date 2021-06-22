import React from 'react';

const Pagination = ({ next, prev }) => {
  return (
    <div className="pagination">
      {prev ? <button onClick={prev}>Previous</button> : null}
      {next ? <button onClick={next}>Next</button> : null}
    </div>
  );
};

export default Pagination;
