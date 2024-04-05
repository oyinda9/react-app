import { useState } from "react";
//{items:[],heading :string}
interface Props {
  items:string[];
  heading:string;
  //(item:string=>void)
  onSelectItem:(item:string)=> void;
}
function ListGroup({items, heading, onSelectItem}:Props) {

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items= [];
  // const getMessage=()=>{
  //   return;
  // }

  // if (items.length === 0)
  // return (
  //   <>
  //   <h1>LIST</h1>
  //   <p>no item found</p>
  // </>
  // ) ;

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
