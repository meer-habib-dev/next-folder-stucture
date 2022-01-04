import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  deleteTodoAction,
  toggleStatusAction,
} from "../../../store/slices/todoSlice";
import SecondaryButton from "../../form/Button/SecondaryButton";
import style from "./ListItem.module.css";

const ListItem = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(todoSelector);
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
