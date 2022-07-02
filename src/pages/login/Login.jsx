import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <div className="login">
      <span className="title">Login</span>
      <form className="form">
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">
          Login
        </button>
      </form>
      Don't have an account?
      <button className="loginRegisterButton">
        <Link style={{color : "black",textDecoration:"none"}} to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
