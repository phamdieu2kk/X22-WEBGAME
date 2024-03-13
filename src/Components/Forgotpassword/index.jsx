
import Slider from '../Slider'
import FooterList from '../FooterList'
import {  NavLink } from "react-router-dom";
import { Button,  Input } from "antd";


const Forgotpassword = () => {
  return (
    <div>
   <Slider title={"Quên Mật Khẩu"} />
  <div>
    <div className="title-home">
          <NavLink to={"/login"} title="Đăng Nhập">
            Đăng nhập
          </NavLink>
          <span>{">"}</span>
          <label>Quên mật khẩu</label>
        </div>
        
   </div>


   <div className="content form-user">
        <div className="container">
          <div>
            <h1 style={{ fontWeight: "700" }}>Quên mật khẩu </h1>
           
        <form>
            <Input
              className="input-username"
              type='email'
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => setUser({...user,email: e.target.value})}
            />
           <Button className="btn-login" type="primary">
              <span style={{ fontSize: "17px" }}>Lấy lại mật khẩu </span>
            </Button>
            </form>

          </div>
        </div>
      </div>        




     <FooterList/>
     </div>
  )
}

export default Forgotpassword