import "./Teachers.css";
import TeacherToolbar from "../components/TeacherToolbar/TeacherToolbar";
import TeacherHeader from "../components/TeacherHeader/TeacherHeader";

function Teachers() {
  return (
    <div className="teachers-page">

      {/* Header */}
      <TeacherHeader />

      {/* Toolbar */}
      <div className="teachers-toolbar">

        <input
          className="teacher-search"
          type="text"
          placeholder="Tìm kiếm giáo viên..."
        />

        <select>
          <option>Tất cả tổ chuyên môn</option>
        </select>

        <select>
          <option>Tất cả môn dạy</option>
        </select>

        <select>
          <option>Tất cả trạng thái</option>
        </select>

        <button className="btn-filter">
          Bộ lọc nâng cao
        </button>

      </div>

      {/* KPI */}
      <div className="teachers-kpis">

        <div className="kpi-card">
          <span>Tổng giáo viên</span>
          <h2>68</h2>
          <small>↑ 3 so với năm trước</small>
        </div>

        <div className="kpi-card">
          <span>Giáo viên giảng dạy</span>
          <h2>62</h2>
          <small>91.2% tổng số</small>
        </div>

        <div className="kpi-card">
          <span>Giáo viên chủ nhiệm</span>
          <h2>18</h2>
          <small>26.5% tổng số</small>
        </div>

        <div className="kpi-card">
          <span>Tổng số tiết / tuần</span>
          <h2>1.248</h2>
          <small>18.2 tiết / giáo viên</small>
        </div>

        <div className="kpi-card">
          <span>Đang bồi dưỡng</span>
          <h2>12</h2>
          <small>17.6% tổng số</small>
        </div>

      </div>

      {/* Content */}
      <div className="teachers-content">

        {/* TeacherTable sẽ triển khai ở bước sau */}

      </div>

    </div>
  );
}

export default Teachers;