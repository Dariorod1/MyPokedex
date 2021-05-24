import React from 'react'
import '../Home/Home.css'
const Pagination = ({ pokesPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / pokesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} >
              <a onClick={() => paginate(number)} href="#" className="link-pag">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default Pagination

