import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";


const Navbar = ({ logout, user, connected }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <Link className="nav-link active link l" to="/">
          {" "}
          <h2>
            {" "}
            <FaAngleLeft /> TechnoVation <FaAngleRight />
          </h2>{" "}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* {connected ? (<li className="nav-item">
              <Link className="nav-link active link" to="/profil">
                <h5>
                   Profil
                </h5>{" "}
              </Link>
            </li>) : false} */}

            {/* {connected ? (
              <li className="nav-item user.name">
                {" "}
                <h4 className="user.name"> Hello ,{user.name}</h4>
              </li>
            ) : (
              false
            )} */}




            { connected ?  ( <li className="nav-item">
              <Link className="nav-link active link" to="/add">
                {" "}
                <h5>
                  <RiHome2Line className="icon" />
                  AddProduct <br />
                  {user.isAdmin? <p> is admin</p>  : <p>not admin</p> }
                </h5>
              </Link>
            </li> ): false }

            <li className="nav-item">
              <Link className="nav-link active link" to="/">
                {" "}
                <h5>
                  <RiHome2Line className="icon" />
                  Home
                </h5>
              </Link>
            </li>
            {/* <li className="nav-item">
          <Link className="nav-link active link"to='/contact' ><h5> <MdOutlineConnectWithoutContact className='icon' />
          Contact </h5> </Link>
        </li> */}
            <li className="nav-item">
              <Link className="nav-link active link" to="/contact">
                {" "}
                <h5>
                  {" "}
                  <RiContactsLine className="icon" />
                  Contact{" "}
                </h5>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active link" to="/settings">
                <h5>
                  {" "}
                  <IoSettingsOutline className="icon" />
                  Settings{" "}
                </h5>{" "}
              </Link>
            </li>

            {connected ? (
              <li className="nav-item">
                <Link className="nav-link active link" to="/calcul">
                  <h5>
                    {" "}
                    <RiShoppingBasketFill className="panier" />
                    
                  </h5>{" "}
                </Link>
              </li>
            ) : (
              false
            )}

            {connected ? (
              <div>
                  
             
                <button
                  className="btn btn-outline-danger"
                  onClick={() => logout()}
                >
                  {" "}
                  logout
                </button>
               
                  
              
              </div>
            ) : (
              <Link className="nav-link active" to="/login">
                {" "}

                <button className="btn btn-outline-primary">
                  {" "}
                  Login{" "}
                </button>{" "}
               
              </Link>
            )}
            {!connected && (
              <div className="auth-buttons">
                <Link className="nav-link active" to="/register">
                  <button className="btn btn-outline-primary register-btn">
                    Register
                  </button>
                </Link>
               
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
