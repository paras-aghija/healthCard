import React from "react";
import { Typography } from "antd";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const { Title, Text } = Typography;
// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "black",
        padding: "1.2rem",
      }}
    >
      <div className="name">
        <h1 className="heading">Electronic Health Card</h1>
      </div>

      <div className="nav-menu">
        <ul className="nav-items">
          <li className={location.pathname === "/" ? "active nav-item" : "nav-item"}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/hints" ? "active nav-item" : "nav-item"}>
            <Link to="/hints">Register Health Card</Link>
          </li>
          <li className={location.pathname === "/debug" ? "active nav-item" : "nav-item"}>
            <Link to="debug">Debug</Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "https://github.com/paras-aghija/healthCard",
  title: "🏗 Electronic Health Record System",
  subTitle: "Digital Decentralized Health Card for Patients",
};
