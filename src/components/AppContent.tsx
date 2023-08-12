import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../store/store";
import style from "../styles/modules/app.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AppContent = () => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const filterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus
  );

  const sortedTodoList = [...todoList];
  //FIXME:
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status == filterStatus;
  });

  return (
    <motion.div
      className={style.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <motion.p className={style.emptyText} variants={child}>
            No Todos Found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default AppContent;
