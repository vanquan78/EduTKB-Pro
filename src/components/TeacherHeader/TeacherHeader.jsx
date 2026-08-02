import "./TeacherHeader.css";

function TeacherHeader() {
  return (
    <div className="teacher-header">

      <div className="teacher-header-left">
        <h1>Quản lý giáo viên</h1>

        <p>
          Quản lý toàn bộ hồ sơ, phân công, chuyên môn và hiệu quả hoạt động
          của giáo viên.
        </p>
      </div>

      <div className="teacher-header-right">

        <button className="btn-secondary">
          Xuất dữ liệu
        </button>

        <button className="btn-primary">
          + Thêm giáo viên
        </button>

      </div>

    </div>
  );
}

export default TeacherHeader;