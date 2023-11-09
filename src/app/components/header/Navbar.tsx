"use client"
import "./navbar.css";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { Row, Col } from "react-bootstrap";
import { useState } from "react";


export default function Navbar() {
  
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <div>
      <section className="topnav">
        <Image src={"/jordanicon.png"} width={20} height={20} alt="icons" />
        <div>
          <span>Find a Store |</span>
          <span> Help |</span>
          <span>Join us |</span>
          <span> Sign in </span>
        </div>
      </section>

      <section className="second-nav">
        <div>
          <Image
            src={"/nike.png"}
            width={50}
            height={50}
            alt="icons"
            id="nikeicon"
          />
        </div>
        <div className="menu-item">
          <ul className="menu-items">
            <li className="listitems">
              <a href="">New & Featured </a>
            </li>
            <li className="listitems">
              <a href="">Men </a>
            </li>
            <li className="listitems">
              <a href=""> Women</a>
            </li>
            <li className="listitems">
              <a href="">Kids</a>
            </li>
            <li className="listitems">
              <a href="">Sale </a>
            </li>
            <li className="listitems">
              <a href="">Customise </a>
            </li>
            <li className="listitems">
              <a href="">SNKRS </a>
            </li>
          </ul>
        </div>
        <div className="thirdsection">
          <div className="searchsection">
            <SearchIcon
              style={{ width: "24px", height: "24px" }}
              className="searchicon "
            />
            <input
              type="text"
              placeholder="Search"
              className="search bg-light  rounded form-control border-0 p-2"
              style={{ width: "150px" }}
            />
          </div>
          <div className="heart ms-4">
            {" "}
            <FavoriteBorderOutlinedIcon className="hearticon" />
          </div>
          <div className="bag ms-4">
            {" "}
            <ShoppingBagOutlinedIcon />
          </div>
          <div className="navbartoggle border-0">
            {" "}
            <nav>
              <button onClick={handleToggle} className="border-0 ms-3"><MenuIcon className="border-0 "/></button>
              {navbarOpen && (
                <ul>
                  <li><h2>New && Featured</h2>
                  </li>
                  <li><h2>Men</h2></li>
                  <li><h2>Women</h2></li>
                  <li><h2>Kids</h2></li>
                  <li><h2>Sale</h2></li>
                  <li><h2>Customise</h2></li>
                  <li><h2>SNKRS</h2></li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </section>

      {/* Third navbar */}
      <section className="third-nav ">
        <div className="text-content">
          <span className="thirdnav-span">Hello Nike App</span>
          <p className="thirdnav-p">
            Download the app to access everything Nike.{" "}
            <a href="" className="thirdnav-link">
              {" "}
              Get Your Great
            </a>{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
