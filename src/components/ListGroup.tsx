// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["mamad", "ali", "jafar", "asqar"];
  if (items.length === 5) {
    return null;
  }
  return (
    <>
      <h1>Hellooooo</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => alert("Clicked on " + item + " " + index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
