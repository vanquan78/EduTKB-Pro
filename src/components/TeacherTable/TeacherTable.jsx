import "./TeacherTable.css";

function TeacherTable({ teachers, onSelectTeacher }) {
  return (
    <div className="teacher-table-wrapper">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Giáo viên</th>
            <th>Mã GV</th>
            <th>Tổ chuyên môn</th>
            <th>Bộ môn</th>
            <th>Chức vụ</th>
            <th>Trạng thái</th>
            <th>Thi đua tháng</th>
            <th>Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>
                <div className="teacher-name">
                  <div className="teacher-avatar">
                    {teacher.fullName.charAt(0)}
                  </div>

                  <div>
                    <strong>{teacher.fullName}</strong>
                    <span>{teacher.level}</span>
                  </div>
                </div>
              </td>

              <td>{teacher.code}</td>
              <td>{teacher.department}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.position}</td>

              <td>
                <span
                  className={`status-badge ${
                    teacher.status === "Đang công tác"
                      ? "status-active"
                      : "status-leave"
                  }`}
                >
                  {teacher.status}
                </span>
              </td>

              <td>
                <div className="emulation">
                  <strong>{teacher.emulationScore}</strong>
                  <span>{teacher.emulationRank}</span>
                </div>
              </td>

              <td>
                <button
                  className="view-button"
                  onClick={() => onSelectTeacher(teacher)}
                >
                  Xem hồ sơ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;