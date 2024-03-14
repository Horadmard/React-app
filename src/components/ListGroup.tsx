import { useState } from "react";

function ListGroup() {
  let items = ["CS", "Dota2", "Apex Legends", "Fortnite"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 5) {
    return null;
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
