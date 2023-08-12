import Button from "./Button";
import SelectButton from "./SelectButton";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useState } from "react";

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={style.appHeader}>
      <Button
        type="button"
        variant="primary"
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
export default AppHeader;
