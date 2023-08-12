import { ToastContainer } from "react-toastify";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader />
          <AppContent></AppContent>
        </div>
      </div>
    </>
  );
}

export default App;
