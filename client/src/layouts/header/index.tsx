import "bootstrap/dist/css/bootstrap.min.css";
import logotct from "../../assets/image/logotct.png"
import "./header.css";

function Header() {
  return (
    <nav className="col-sm-11 mx-auto navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
         <img className="w-100 d-block d-lg-none" src={logotct} alt="" />
         <img className="w-75 d-none d-lg-block" src={logotct} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav nav-container">
          <li className="nav-item f-linknavbar active item">
            <a className="nav-link" href="#">
              Trang Chủ <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item f-linknavbar " >
            <a className="nav-link" href="#">
              Gioi Thiệu
            </a>
          </li>
          <li className="nav-item f-linknavbar">
            <a className="nav-link" href="#">
              Liên Hệ
            </a>
          </li>
          <li className="nav-item f-linknavbar " >
            <a className="nav-link" href="#">
              Tài Khoản
            </a>
          </li>
          <li className="nav-item f-linknavbar dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
             Cẩm Nang
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Tin Học
              </a>
              <a className="dropdown-item" href="#">
                Nghiệp Vụ
              </a>
              <a className="dropdown-item" href="#">
                Tài Chính
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
