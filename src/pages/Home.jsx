import React from 'react'
import Products from './Products'
import NextPrevious from '../components/NextPrevious'
import { MdPhoneIphone } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";

const Home = () => {
  return (
    <div className=''>
      <div className="home-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Categories</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <i className="icon-phone"></i> <MdPhoneIphone className='side-icon'  /> Smart Phone
          </li>
          <li className="sidebar-item">
            <i className="icon-Écouteurs"></i><CiHeadphones className='side-icon' />  Écouteurs
          </li>
          <li className="sidebar-item">
            <i className="icon-powerbank"></i> <IoPhonePortrait className='side-icon' />  Powerbank
          </li>
        </ul>
      </aside>
      <main className="content">
      <Products/>
      </main>
    </div>
    </div>
  )
}

export default Home
