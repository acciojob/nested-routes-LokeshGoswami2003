import React from 'react';
import SubLayout from '../components/SubLayout';
import { Outlet } from 'react-router-dom';

const Women = () => {
  return (
    <div>
      <p>Women Items:</p>
      <SubLayout 
        pages={[
          {name: "Grooming", path:"/women/Grooming"},
          {name: "Shirt", path:"/women/Shirt"}, 
          {name: "Trouser", path:"/women/Trouser"}, 
          {name: "Jewellery", path:"/women/Jewellery"}
        ]}
      />
      <Outlet />
    </div>
  );
};

export default Women;