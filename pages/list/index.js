import HomeLayout from "../../layouts/HomeLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  toggleStatusAction,
  deleteTodoAction,
} from "../../store/slices/todoSlice";
import ListItem from "../../components/listComponents/ListItem";

const List = () => {
  //   const dispatch = useDispatch();
  //   const { list } = useSelector(todoSelector);

  return (
    <HomeLayout>
      {/* <div className="container mt-10 mx-auto">
               {
                   list.map((item, index) => (
                       <div key={item.id} className={'my-4 p-4 flex items-center rounded bg-gray-100 shadow'}>
                           <div onClick={() => dispatch(toggleStatusAction(index))} className={`cursor-pointer inline-block w-5 h-5 mr-4 border rounded transition-all duration-300 ${item.status ? 'bg-green-900' : "bg-red-800"}`}></div>
                           {
                               item.text
                           }
                           <button
                               onClick={(e) => dispatch(deleteTodoAction(index))}
                               className="focus:outline-none py-1 px-3 rounded mx-4 bg-red-500 text-black">Delete</button>
                       </div>
                   ))
               }
           </div> */}
      <ListItem></ListItem>
    </HomeLayout>
  );
};

export default List;
