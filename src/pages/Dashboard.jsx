import "./Dashboard.css";

import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Dashboard() {
  const stats = [
    {
      title: "Học sinh",
      value: "1.245",
      change: "↑ 28 so với tháng trước",
      icon: <PeopleIcon />,
      type: "students",
    },
    {
      title: "Giáo viên",
      value: "87",
      change: "↑ 3 so với tháng trước",
      icon: <PersonIcon />,
      type: "teachers",
    },
    {
      title: "Lớp học",
      value: "32",
      change: "Không thay đổi",
      icon: <SchoolIcon />,
      type: "classes",
    },
    {
      title: "Tiết học hôm nay",
      value: "42",
      change: "Xem thời khóa biểu →",
      icon: <CalendarMonthIcon />,
      type: "lessons",
    },
    {
      title: "Nhiệm vụ",
      value: "7",
      change: "2 nhiệm vụ quá hạn",
      icon: <AssignmentIcon />,
      type: "tasks",
    },
  ];

  return (
    <div className="dashboard">
      <section className="welcome-banner">
        <div>
          <h2>Chào buổi sáng, Nguyễn Văn Quân!</h2>
          <p>Thứ Năm, ngày 24 tháng 07 năm 2026</p>
        </div>

        <div className="school-illustration">
          EduTKB Pro
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <div className={`stat-icon ${item.type}`}>
              {item.icon}
            </div>

            <div className="stat-content">
              <span>{item.title}</span>
              <strong>{item.value}</strong>
              <small>{item.change}</small>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-panel timetable-panel">
          <div className="panel-header">
            <h3>Thời khóa biểu hôm nay</h3>
            <a href="/timetable">Xem chi tiết →</a>
          </div>

          <div className="lesson-list">
            <div className="lesson-item">
              <span>07:30 - 08:15</span>
              <div>
                <strong>Toán</strong>
                <small>Lớp 5A</small>
              </div>
              <em>Phòng 201</em>
              <b>Đã dạy</b>
            </div>

            <div className="lesson-item">
              <span>08:20 - 09:05</span>
              <div>
                <strong>Tiếng Việt</strong>
                <small>Lớp 5A</small>
              </div>
              <em>Phòng 201</em>
              <b>Đã dạy</b>
            </div>

            <div className="lesson-item">
              <span>09:25 - 10:10</span>
              <div>
                <strong>Mỹ thuật</strong>
                <small>Lớp 5A</small>
              </div>
              <em>Phòng 203</em>
              <b className="upcoming">Sắp tới</b>
            </div>

            <div className="lesson-item">
              <span>10:15 - 11:00</span>
              <div>
                <strong>Hoạt động trải nghiệm</strong>
                <small>Lớp 5A</small>
              </div>
              <em>Phòng 203</em>
              <b className="upcoming">Sắp tới</b>
            </div>

            <div className="lesson-item">
              <span>13:30 - 14:15</span>
              <div>
                <strong>Khoa học</strong>
                <small>Lớp 5A</small>
              </div>
              <em>Phòng 202</em>
              <b className="upcoming">Sắp tới</b>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Thống kê tuần này</h3>
            <button>Tuần 29 (17/07 - 23/07)</button>
          </div>

          <div className="chart-placeholder">
            <div className="bars">
              <span style={{ height: "55%" }}></span>
              <span style={{ height: "75%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "82%" }}></span>
              <span style={{ height: "52%" }}></span>
              <span style={{ height: "25%" }}></span>
            </div>

            <div className="chart-labels">
              <span>T2</span>
              <span>T3</span>
              <span>T4</span>
              <span>T5</span>
              <span>T6</span>
              <span>CN</span>
            </div>
          </div>

          <div className="weekly-summary">
            <div>
              <small>Tiết học</small>
              <strong>175/210</strong>
              <span>83% kế hoạch</span>
            </div>

            <div>
              <small>Tiết đã dạy</small>
              <strong>175</strong>
              <span>↑ 12 so với tuần trước</span>
            </div>

            <div>
              <small>Tiết còn lại</small>
              <strong>35</strong>
              <span>Cần hoàn thành</span>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Thông báo</h3>
            <a href="/notifications">Xem tất cả →</a>
          </div>

          <div className="notification-list">
            <div className="notification-item">
              <NotificationsIcon />
              <div>
                <strong>Họp chuyên môn tổ 1</strong>
                <small>14:00, Thứ 6 ngày 25/07/2026</small>
              </div>
            </div>

            <div className="notification-item">
              <CalendarMonthIcon />
              <div>
                <strong>Nộp kế hoạch bài dạy</strong>
                <small>Hạn cuối: 28/07/2026</small>
              </div>
            </div>

            <div className="notification-item">
              <CheckCircleIcon />
              <div>
                <strong>Thi đua tuần 29</strong>
                <small>Lớp 5A đạt 92/100 điểm</small>
              </div>
            </div>

            <div className="notification-item">
              <MenuBookIcon />
              <div>
                <strong>Cập nhật thời khóa biểu</strong>
                <small>Có 2 thay đổi trong tuần tới</small>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Tình hình thi đua - nề nếp</h3>
            <a href="/competition">Xem chi tiết →</a>
          </div>

          <div className="discipline">
            <div className="score-circle">
              <strong>92</strong>
              <span>/100</span>
              <small>Điểm trung bình</small>
            </div>

            <div className="progress-list">
              <div>
                <span>Vệ sinh</span>
                <b>95/100</b>
              </div>
              <div>
                <span>Đi học đúng giờ</span>
                <b>98/100</b>
              </div>
              <div>
                <span>Đồng phục</span>
                <b>90/100</b>
              </div>
              <div>
                <span>Học tập</span>
                <b>92/100</b>
              </div>
              <div>
                <span>Hoạt động Đội</span>
                <b>85/100</b>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Nhiệm vụ sắp tới</h3>
            <a href="/tasks">Xem tất cả →</a>
          </div>

          <div className="task-list">
            <div>
              <input type="checkbox" />
              <span>
                Soạn giáo án tuần 30
                <small>Hạn: 25/07/2026</small>
              </span>
              <b>Quan trọng</b>
            </div>

            <div>
              <input type="checkbox" />
              <span>
                Nhập điểm kiểm tra giữa kỳ
                <small>Hạn: 28/07/2026</small>
              </span>
              <b>Trung bình</b>
            </div>

            <div>
              <input type="checkbox" />
              <span>
                Báo cáo chuyên đề STEM
                <small>Hạn: 30/07/2026</small>
              </span>
              <b>Thấp</b>
            </div>
          </div>
        </div>

        <div className="dashboard-panel quick-panel">
          <div className="panel-header">
            <h3>Truy cập nhanh</h3>
          </div>

          <div className="quick-grid">
            <a href="/timetable">
              <CalendarMonthIcon />
              <span>Thời khóa biểu</span>
            </a>

            <a href="/classes">
              <SchoolIcon />
              <span>Danh sách lớp</span>
            </a>

            <a href="/students">
              <PeopleIcon />
              <span>Nhập điểm</span>
            </a>

            <a href="/subjects">
              <MenuBookIcon />
              <span>Kế hoạch dạy học</span>
            </a>

            <a href="/documents">
              <AssignmentIcon />
              <span>Tài liệu</span>
            </a>

            <a href="/reports">
              <MeetingRoomIcon />
              <span>Báo cáo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;