import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/sam">About</Link>
        </li>
        <li>
          <Link to="/dashboard/js">Dashboard</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}
