import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/image/615px-Food_Network_New_Logo 2.svg"

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div className="container">
      <div className='navbar'>
        
       <div className="navbar__item">
       <NavLink className="navbar__logo" to={"/"}>
          <img src={Logo} alt="" />
        </NavLink>
       <NavLink to={"/admin/productcreate"}>
         <span>Createproduct</span>
        </NavLink>
        <NavLink to={"/admin/productmanage"}>
         <span>Manageproduct</span>
        </NavLink>
        <NavLink to={"/admin/usercreate"}>
         <span>Createuser</span>
        </NavLink>
        <NavLink to={"/admin/usermanage"}>
         <span>Manageuser</span>
        </NavLink>
       </div>
      <div className="navbar__carts">
      <NavLink to={"/wishlist"}>
          <FaRegHeart/>
        </NavLink>
        <NavLink to={"/cart"}>
          <IoCartOutline/>
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar