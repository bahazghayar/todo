import React, { useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination(props) {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(3);

  const idxOfLastItem = currentPage * itemPerPage;
  const idxOfFirstItem = idxOfLastItem - itemPerPage;
  const list = props.list.sort((item1, item2) => item1.difficulty < item2.difficulty ? -1 : 1);
  let current = list.slice(idxOfFirstItem, idxOfLastItem)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setItems = numberOfPages => setItemPerPage(numberOfPages);

  const state = {
    currentPage,
    setCurrentPage,
    itemPerPage, 
    setItemPerPage,
    current,
    paginate,
    setItems,
  }

  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );

}

export default Pagination;