import React from "react";
import {
  NavLink,
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarText,
} from "reactstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar className="navbar">
        <Nav navbar>
          <div className="left">
            <NavbarBrand href="/">Logo</NavbarBrand>
          </div>
          <div className="center">
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/explore">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/career">Career</NavLink>
            </NavItem>
          </div>
          <div className="right">
            <NavItem>
              <NavLink to="/contact">Contact Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavbarText>Profile</NavbarText>
            </NavItem>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
