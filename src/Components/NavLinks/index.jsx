import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { Button } from "antd";
import axios from "axios";

const NavLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isHoveredProduct, setIsHoveredProduct] = useState(false);
  const [previousMouseOverProduct, setPreviousMouseOverProduct] =
    useState(false);

  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [previousMouseOverLogin, setPreviousMouseOverLogin] = useState(false);

  const [rank, setRank] = useState({
    data: null,
    isLoading: false,
  });

 

  const [isLogin] = useState(false);




  const handlerMouseEnterLogin = () => {
    if (!isHoveredLogin) {
      setIsHoveredLogin(true);
      setPreviousMouseOverLogin(true);
    }
  };
  const handlerMouseLeaveLogin = () => {
    if (previousMouseOverLogin) {
      setIsHoveredLogin(false);
      setPreviousMouseOverLogin(false);
    }
  };

  const handlerMouseEnterProduct = () => {
    if (!isHoveredProduct) {
      setIsHoveredProduct(true);
      setPreviousMouseOverProduct(true);
    }
  };

  return (
    <>
      <div className={`menu-container ${showMenu ? "hSticky" : ""}`}>
        <div className="container">
          <div className="row row-hear align-items-center">
            <div className="col-lg-8 menu-content">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Hướng Dẫn
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to={"/products"}
                    onMouseMove={handlerMouseEnterProduct}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Chủ đề
                  </NavLink>
                </li>
               
                <li className="menu-item">
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "menu-active" : "menu-item"
                    }
                  >
                    Liên Hệ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 menu-control">
              
              <div className="icon">
                <NavLink
                  className="icon-login"
                  onMouseMove={handlerMouseEnterLogin}
                >
                  <FaRegUser style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              </div>
          </div>
        </div>
        
        <div
          className={`form-login ${isHoveredLogin ? "" : "d-none"}`}
          onMouseLeave={handlerMouseLeaveLogin}
        >
          <div className="link-login">
            <NavLink to={`${isLogin ? "/accont" : "/login"}`}>{`${
              isLogin ? "Tài khoản" : "Đăng nhập"
            }`}</NavLink>
          </div>
          <div className = "link-register">
            <NavLink className={`${isLogin ? "d-none":""}` } to={"/register"} >
              Đăng Ký
            </NavLink>
            <Button className={`${isLogin ? "link-register":"d-none"}`} onClick={() => deleteSecction()}>Đăng xuất</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
