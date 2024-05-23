import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  }

  return (
    <ul className="item--container">
      <li> {item.label}</li>
      {item && item.children && item.children.length > 0 ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {displayChildren[item.label] ? <FaMinus /> : <FaPlus size={20} />}
        </span>
      ) : null}

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </ul>
  );
};

export default MenuItem;
