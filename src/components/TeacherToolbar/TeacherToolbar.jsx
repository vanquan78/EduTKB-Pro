import "./TeacherToolbar.css";

function TeacherToolbar() {
  return (
    <div className="teacher-toolbar">

      <input
        className="teacher-search"
        type="text"
        placeholder="🔍 Tìm kiếm giáo viên..."
      />

      <select>
        <option>Tất cả tổ chuyên môn</option>
      </select>

      <select>
        <option>Tất cả môn học</option>
      </select>

      <select>
        <option>Tất cả trạng thái</option>
      </select>

      <button className="toolbar-button">
        Bộ lọc nâng cao
      </button>

    </div>
  );
}

export default TeacherToolbar;