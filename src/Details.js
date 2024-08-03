import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Details() {
  return (
    <>
      <div>Details</div>
      <nav>
        <Link to="phone">Phone</Link>
        <Link to="computer">Computers</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default Details