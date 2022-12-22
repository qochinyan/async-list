import "./AsyncList.scss";
import {Items} from "../../data/data.js";
import { useState } from "react";
import Item from "../Item/Item";
const AsyncList = () => {
    console.log(Items[0])
  const [data, setData] = useState([...Items]);
  const [lastIndex, setLastIndex] = useState(1);
  const handleItemAdd = () => {
    let newList = [...data]
    newList.push({id:3,removingIn:20})
    setData(newList)
    console.log(data);
  };
  return (
    <div className="list-container">
      <button onClick={handleItemAdd} className="item--adder">
        Press To Add Items
      </button>
      <div className="items-box">
        {data.map((el, i) => {
          return <Item el={el} key={i} />;
        })}
      </div>
    </div>
  );
};
export default AsyncList;
