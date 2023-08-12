import Button from "./Button";
import SelectButton from "./SelectButton";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";
import { RootState } from "../store/store";

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus
  );
  const dispatch = useDispatch();
  //FIXME:
  const updateFilter = (e: React.ChangeEvent) => {
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={style.appHeader}>
      <Button
        type="button"
        variant="primary"
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
export default AppHeader;
