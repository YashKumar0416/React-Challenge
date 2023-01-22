import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Page = ({ postsPerPage, totalPosts, setPage }) => {

    const pageNumbers = [];

    //SET TOTAL PAGES
    for(let i=1; i<= Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} onClick={()=>{setPage(i)}} active={i === setPage}>
                {i}
            </Pagination.Item>
        );
    }

  return (
    <>
    <Pagination>{pageNumbers}
    </Pagination>
    </>
  )
}

export default Page;