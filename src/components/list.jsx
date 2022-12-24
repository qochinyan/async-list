import React, { useEffect, useState } from "react";

import "./list.scss";
import Item from "./item/item";

const List = () => {
  const [data, setData] = useState([]);
  const [countNulls, setCountNulls] = useState(0);

  function handleItemAdd() {
    setData([
      ...data,
      {
        id: `${data.length}`,
        time: Math.round(Math.random() * (30 - 10) + 10),
      },
    ]);
  }

  useEffect(() => {
    if (countNulls == data.length) {
      setData([]);
      setCountNulls(0);
    }
  }, [countNulls]);

  function deleteByIndex(index) {
    let newData = [...data];
    newData[index] = { id: null, time: null };
    setData(newData);
  }

  return (
    <div className="list-container">
      <button onClick={handleItemAdd} className="item--adder">
        Press To Add Items
      </button>
      <div className="items-box">
        {data.map((el, i) => (
          <Item
            setCountNulls={setCountNulls}
            countNulls={countNulls}
            setData={setData}
            deleteByIndex={deleteByIndex}
            data={data}
            el={el}
            key={i + ""}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
