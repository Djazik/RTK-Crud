import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./admin.css"
import ManageProduct from './manage-product/ManageProduct'

const Admin = () => {
  return (
    <div className='admin container' >
      <div className="admin__sidebar">
      <li><Link to="usercreate">Create User</Link></li>
      <li><Link to="usermanage">Manage User</Link></li>
      <li><Link to="productcreate">Create Product</Link></li>
      <li><Link to="productmanage">Manage Product</Link></li>
      </div>
      <div className="admin__content">
      <Outlet/>
      </div>


    </div>
  )
}

export default Admin