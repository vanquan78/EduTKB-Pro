function Login() {
  return (
    <div>
      <h2>Đăng nhập</h2>

      <input
        type="text"
        placeholder="Tên đăng nhập"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Mật khẩu"
      />

      <br /><br />

      <button>Đăng nhập</button>
    </div>
  );
}

export default Login;