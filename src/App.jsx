import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      setMessage("Đăng nhập thành công!");
      setIsLoggedIn(true);
    } else {
      setMessage("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  if (isLoggedIn) {
    return <AppRouter />;
  }

  return (
    <div className="container">
      <div style={{ fontSize: "80px" }}>🔒</div>

      <h1>EduTKB Pro</h1>
      <h2>Hệ thống quản lý trường học thông minh</h2>

      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {message && <p>{message}</p>}

      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default App;