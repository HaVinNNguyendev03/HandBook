import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logohaigach from "../../../assets/image/logohaigach.png"
import "./login.css";
function Login() {
  return (
    <form className="from-login col-3 mx-auto">
      <div className="form-group from-login_logo">
        <img src={logohaigach} alt=""  />
      </div>
      <div className="form-group from-login_email">
        <label htmlFor="exampleInputEmail1">Địa chỉ email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group from-login_password">
        <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      {/* <div className="form-check from-login_check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Nhớ Mật Khẩu</label>
  </div> */}
      <button
        type="submit"
        className="btn btn-primary col-12 from-login_submit"
      >
        Đăng Nhập
      </button>
    </form>
  );
}

export default Login;
