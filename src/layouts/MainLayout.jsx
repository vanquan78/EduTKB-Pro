import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;