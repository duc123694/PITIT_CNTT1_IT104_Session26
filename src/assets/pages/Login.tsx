// Email user: user@gmail.com - Password: user
// Email admin: admin@gmail.com - Password: admin

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./Account";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string | "">("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password && role) {
      const person = { email: email, password: password, role: role };
      if (
        (person.email === admin.email &&
          person.password === admin.password &&
          person.role === admin.role) ||
        (person.email === user.email &&
          person.password === user.password &&
          person.role === user.role)
      ) {
        navigate("/account");
      } else {
        setIsShowError(true);
      }
    }
  };

  

  const admin = { email: "admin@gmail.com", password: "admin", role: "admin" };
  const user = { email: "user@gmail.com", password: "user", role: "user" };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Đăng nhập</h3>
        <input
          onChange={handleChangeInput}
          type="text"
          placeholder="Nhập email"
          name="email"
        />
        <br />
        <input
          onChange={handleChangeInput}
          type="password"
          placeholder="Nhập mật khẩu"
          name="password"
        />
        <br />
        <select onChange={handleSelect} name="role" id="role">
          <option selected disabled value="*">
            Chọn quyền
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />
        <button type="submit">Đăng nhập</button>
        {isShowError && (
          <div style={{ color: "red" }} className="error">
            Email hoặc mật khẩu không trùng khớp
          </div>
        )}
      </form>
    </div>
  );
}
