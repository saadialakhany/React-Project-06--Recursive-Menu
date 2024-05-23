import React from "react";
import MenuList from "./MenuList";
import menus from "./data";
import "./style.css";

const RecursiveNavigationMenu = () => {
  return (
    <div className="menu--container">
      <h2>Recursive Navigation Menu</h2>
      <MenuList list={menus} />
    </div>
  );
};

export default RecursiveNavigationMenu;
