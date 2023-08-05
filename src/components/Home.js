// import React from 'react';
import { useLocation } from 'react-router-dom';
import { TableComponent } from './TableComponent';
// import React, { useEffect, useState } from 'react';


export const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const password = queryParams.get('password');

  return (
    <div className='w-100 vh-50 d-flex align-items-center justify-content-center'>
      <div className="shadow w-50 h-50 m-auto mb-10 bg-light rounded">
        <div className='d-grid gap-2 col-6 mx-auto'>
          <div className='item'>
            <h1>Info Login</h1>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
          </div>
          <div className='sticky-sm-bottom' align="center">
            <a href='/'><button type="button" className="btn btn-danger">Back</button></a>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;