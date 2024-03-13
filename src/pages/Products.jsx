import { useEffect, useState } from "react";
import axios from "axios";

import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

import "../Components/Products/style.css";
import { NavLink } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProducts(() => ({ data: _data, isLoading: false }));
    })();
  }, []);

  const { data } = products;

  console.log(data);
  return (
    <>
     
        <Slider title={"Tất cả Chủ đề"} />
        <div className="content">
        <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Tất cả chủ đề</label>
        </div>
        
              </div>
              <div className="content">
          <section className="section-danhmuc">
            <div className="row">
              <div className="col-12 swiper-flex">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://png.pngtree.com/thumb_back/fw800/background/20230903/pngtree-a-puzzle-board-with-flags-set-up-image_13191520.jpg" />
                      <div className="outstanding-detail">
                        <h3>
                          Chủ Đề
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://png.pngtree.com/thumb_back/fw800/background/20230903/pngtree-a-puzzle-board-with-flags-set-up-image_13191520.jpg" />
                      <div className="outstanding-detail">
                        <h3>
                        Chủ Đề
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://png.pngtree.com/thumb_back/fw800/background/20230903/pngtree-a-puzzle-board-with-flags-set-up-image_13191520.jpg" />
                      <div className="outstanding-detail">
                        <h3>
                        Chủ Đề
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://png.pngtree.com/thumb_back/fw800/background/20230903/pngtree-a-puzzle-board-with-flags-set-up-image_13191520.jpg" />
                      <div className="outstanding-detail">
                        <h3>
                        Chủ Đề
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          </div>

      <FooterList />
    </>
  );
};

export default Products;
