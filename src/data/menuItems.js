import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  {
    icon: DashboardIcon,
    title: "Tổng quan",
    path: "/",
  },
  {
    icon: GroupsIcon,
    title: "Học sinh",
    path: "/students",
  },
  {
    icon: PersonIcon,
    title: "Giáo viên",
    path: "/teachers",
  },
  {
    icon: SchoolIcon,
    title: "Lớp học",
    path: "/classes",
  },
  {
    icon: CalendarMonthIcon,
    title: "Thời khóa biểu",
    path: "/timetable",
  },
  {
    icon: MenuBookIcon,
    title: "Môn học",
    path: "/subjects",
  },
  {
    icon: MeetingRoomIcon,
    title: "Phòng học",
    path: "/rooms",
  },
  {
    icon: AssignmentTurnedInIcon,
    title: "Phân công chuyên môn",
    path: "/assignments",
  },
  {
    icon: EmojiEventsIcon,
    title: "Thi đua - Nề nếp",
    path: "/emulation",
  },
  {
    icon: TaskAltIcon,
    title: "Kế hoạch - Nhiệm vụ",
    path: "/tasks",
  },
  {
    icon: BarChartIcon,
    title: "Báo cáo - Thống kê",
    path: "/reports",
  },
  {
    icon: AutoAwesomeIcon,
    title: "AI Copilot",
    path: "/ai-copilot",
  },
  {
    icon: SettingsIcon,
    title: "Cài đặt hệ thống",
    path: "/settings",
  },
];

export default menuItems;