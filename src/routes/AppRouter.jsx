import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Classes from "../pages/Classes";
import Subjects from "../pages/Subjects";
import Timetable from "../pages/Timetable";
import Settings from "../pages/Settings";

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>{title}</h2>
      <p>Module đang được triển khai.</p>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="classes" element={<Classes />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="subjects" element={<Subjects />} />

          <Route
            path="rooms"
            element={<PlaceholderPage title="Phòng học" />}
          />

          <Route
            path="assignments"
            element={<PlaceholderPage title="Phân công chuyên môn" />}
          />

          <Route
            path="emulation"
            element={<PlaceholderPage title="Thi đua - Nề nếp" />}
          />

          <Route
            path="tasks"
            element={<PlaceholderPage title="Kế hoạch - Nhiệm vụ" />}
          />

          <Route
            path="reports"
            element={<PlaceholderPage title="Báo cáo - Thống kê" />}
          />

          <Route
            path="ai-copilot"
            element={<PlaceholderPage title="AI Copilot" />}
          />

          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;