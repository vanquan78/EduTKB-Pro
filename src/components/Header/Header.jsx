import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>EduTKB Pro</h1>
      </div>

      <div className="header-right">
        <span>Năm học 2026–2027</span>
        <span>Thông báo</span>
        <span>Quản trị viên</span>
      </div>
    </header>
  );
}

export default Header;