import "./item.scss";
import { useEffect, useState } from "react";

const Item = ({setCountNulls,countNulls, el, setData, data, deleteById }) => {
  //
  const [open, setOpen] = useState(true);
  const [time, setTime] = useState(el.time ?? 0);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (time < 1) {
        deleteById(el.id);
        setOpen(false);
        setCountNulls(countNulls=>countNulls+1)
      } else {
        setTime(time - 1);
      }
      clearTimeout(timeout);
    }, 1000);
  }, [time]);

  return (
    <div className="item-container" style={{ display: open ? "flex" : "none" }}>
      <span className="item-index">
        <img
          className="id-img"
          src="https://cdn-icons-png.flaticon.com/512/5584/5584493.png"
          alt=""
        />
        {Number(el.id) + 1}
      </span>
      <span className="item-removing--time">{time}</span>
    </div>
  );
};
export default Item;
