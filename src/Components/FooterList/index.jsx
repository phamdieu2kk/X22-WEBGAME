
import "./style.css";

const FooterList = () => {
  return (
    <>
      <footer className="footerlist">
        <div className="mid-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4 ft-info col-footer">
                
                
                <h4 className="title-menu">WEB GAME</h4>
               <ul className="list-menu">
               <li>
                      <p>Địa chỉ: </p>
                      <span>70 Lữ Gia, Phường 15, Quận 11, TP.HCM</span>
                    </li>
                    <li>
                      <p>Số điện thoại: </p>
                      <span>0858495444</span>
                    </li>
               </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-2 link-list col-footer">
                <h4 className="title-menu title-menu2">Chính sách</h4>
                <ul className="list-menu">
                  
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 link-list col-footer">
                <h4 className="title-menu title-menu2">Thông tin chung</h4>
                <div className="group-adress">
                  <ul className="list-menu">
                   
                    <li>
                      <p>Email: </p>
                      <span>support@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-3">
                <h4 className="title-menu title-menu2">Hỗ trợ</h4>
                <div className="group-adress">
                  
                </div>
                <h4 className="title-menu title-menu2">19006750</h4>
                <div className="group-adress">
                  <ul className="list-menu">
                    <li>
                      <p>Tất cả các ngày trong tuần</p>
                      <span>Trừ tết Âm Lịch(08:00 - 21:00 mỗi ngày)</span>
                    </li>
                  </ul>
                </div>
                <h4 className="title-menu title-menu2">GÓP Ý & KHIẾU NẠI</h4>
                <div className="group-adress">
                  <ul className="list-menu">
                    <li>
                      <p>Tất cả các ngày trong tuần</p>
                      <span>08:00 - 21:00 mỗi ngày</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterList;
