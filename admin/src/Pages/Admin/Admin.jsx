import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct'; // Fixed import path for AddProduct
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} /> {/* Use lowercase to match Sidebar link */}
        <Route path='/listproduct' element={<ListProduct />} /> {/* Use lowercase to match Sidebar link */}
      </Routes>
    </div>
  );
};

export default Admin;
