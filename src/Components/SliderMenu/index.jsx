
import "./style.css";

const SliderMenu = () => {
  return (
    <div>
      <section className="section-slider">
        <div className="section-img">
          <img src="https://trangnguyen.edu.vn/assets/images/bg-header.png" />
        </div>
        <div className="thumb-slider">
          <div className="slider-text">
            <h2 className="title-slider">
              <img src="https://vcdn-vnexpress.vnecdn.net/2015/11/23/0-5089-1448249469.jpg"/>
            </h2>
           
            <a className="slider-button" title="Xem ngay" href="/products">
              Play
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default SliderMenu;
