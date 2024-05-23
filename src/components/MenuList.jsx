import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <div className="list--container">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </div>
  );
};

export default MenuList;
