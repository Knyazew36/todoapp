import clsx from "clsx";
import style from "../styles/modules/todoItem.module.scss";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import { toast } from "react-toastify";
import TodoModal from "./TodoModal";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { motion } from "framer-motion";

interface Props {
  todo: {
    title: string;
    id: string;
    status: string;
    time: string;
  };
}

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  return (
    <>
      <motion.div className={style.item} variants={child}>
        <div className={style.todoDetails}>
          <CheckBox checked={checked} handleCheck={handleCheck} />
          <div className={style.texts}>
            <p
              className={clsx(style.todoText, {
                [style["todoText--completed"]]: todo.status === "complete",
              })}
            >
              {todo.title}
            </p>
            <p className={style.time}>{todo.time}</p>
          </div>
        </div>
        <div className={style.todoActions}>
          <div
            className={style.icon}
            onClick={() => handleDelete()}
            role="button"
            tabIndex={0}
            onKeyDown={() => handleDelete()}
          >
            <MdDelete />
          </div>
          <div
            className={style.icon}
            onClick={() => handleUpdate()}
            role="button"
            tabIndex={0}
            onKeyDown={() => handleUpdate()}
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        modalOpen={updateModalOpen}
        todo={todo}
        setModalOpen={setUpdateModalOpen}
        type="update"
      />
    </>
  );
};
export default TodoItem;
