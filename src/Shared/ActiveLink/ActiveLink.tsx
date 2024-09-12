import './ActiveLink.css'
import { NavLink } from "react-router-dom";
import React from 'react';

interface ActiveLinkProps {
  to: string;
  children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;

