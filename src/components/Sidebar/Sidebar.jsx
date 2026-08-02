import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import menuItems from "../../data/menuItems";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>EduTKB Pro</h2>
        <p className="sidebar-subtitle">Smart School Platform</p>
      </div>

      <nav>
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  <Icon fontSize="small" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
