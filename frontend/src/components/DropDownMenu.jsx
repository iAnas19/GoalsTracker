import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FaBars, FaCog, FaHome, FaPhone, FaPlus, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const DropDownMenu = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive === true) {
      setIsActive(false);
    }
  }, [navigate]);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <FaBars />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link to="/" className="anchor">
              <FaHome />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/form" className="anchor">
              <FaPlus />
              Create Goal
            </Link>
          </li>
          <li>
            <Link to="/profile" className="anchor">
              <FaUser />
              Your Profile
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className="anchor">
              <FaPhone />
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/underDevelopment" className="anchor">
              <FaCog />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropDownMenu;
