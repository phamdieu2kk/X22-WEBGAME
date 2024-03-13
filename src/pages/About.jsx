import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <Slider title={"Hướng Dẫn & Điều Khoản"} />
      </div>
      <div className="content">
      <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Hướng Dẫn & Điều Khoản </label>
        </div>
        </div>
      <FooterList/>
    </>
  );
};

export default About;
