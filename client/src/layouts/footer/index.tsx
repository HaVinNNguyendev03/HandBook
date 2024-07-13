import { useState } from 'react'
import logochuan from '../../assets/image/logochuan.png'
import './footer.css'

function Footer() {
  

  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      
      <section className=" col-11 mx-auto d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
        <div className="me-5 d-none d-lg-block">
          <span>Kết Nối Với PTKNV Quảng Ngãi Tại</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
          <i className="fa-brands fa-viber"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
       
      </section>
      
    
      
      <section className="">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             
              <h6 className="text-uppercase text-center  fw-bold mb-4">
                <img className="mb-4" src={logochuan}/>
                <p>Tổng Công Ty Bưu Điện Việt Nam</p>
              </h6>
              <p>
                Bưu Điện Tỉnh Quảng Ngãi Là Một Đơn Vị Sáng Trong Tổng Công Ty
              </p>
            </div>
            
    
            
            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div> */}
            
    
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                Cẩm Nang
              </h6>
              <p>
                <a href="#!" className="text-reset">Nghiệp Vụ</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Hành Chính</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Tin Học</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Hỗ Trợ</a>
              </p>
            </div>
            
    
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
              <p><i className="fas fa-home me-3"></i>70 Quang Trung-TP.Quảng Ngãi</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                nguyenvanphucdev03@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
           
          </div>
          
        </div>
      </section>
      
    
    
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                 © 2024 : Website do phòng kỹ thuật nghiệp vụ Quảng Ngãi phát triển 
      </div>
    
    </footer>

  )
}

export default Footer
