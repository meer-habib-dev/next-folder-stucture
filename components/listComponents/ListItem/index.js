import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  deleteTodoAction,
  toggleStatusAction,
} from "../../../store/slices/todoSlice";
import SecondaryButton from "../../form/Button/SecondaryButton";
import style from "./ListItem.module.css";

const ListItem = () => {
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();
  const { list } = useSelector(todoSelector);
  console.log(list);
  //   if (list.length === 0) {
  //     setMessage(true);
  //     // alert("There is not todos");
  //   }
  if (list.length === 0) {
    return (
      <div className={style["message"]}>
        {" "}
        <p>There is no Todos to Show!! Please Create One</p>{" "}
      </div>
    );
  }
  return (
    <div>
      <div className={style["list-home"]}>
        {list.map((item, index) => (
          <div key={item.id} className={style["list-item"]}>
            <div
              onClick={() => dispatch(toggleStatusAction(index))}
              className={`${style.list} ${
                item.status ? "bg-green-900" : "bg-red-800"
              }`}
            ></div>
            {item.text}
            <SecondaryButton onClick={(e) => dispatch(deleteTodoAction(index))}>
              Delete
            </SecondaryButton>
            {!item && <p> this is sadfl</p>}
          </div>
        ))}
        {/* {message && (
          
        )} */}
      </div>
    </div>
  );
};

export default ListItem;
