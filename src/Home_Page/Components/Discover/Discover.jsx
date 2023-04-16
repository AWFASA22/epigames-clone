import "./Discover.css";
const Discover = () => {
  return (
    <div className="Container">
      <div className="img">
        <img
          src="https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-desktop-1920x1080-0f34670e13e7.jpg"
          alt=""
        />
      </div>
      <div className="ContainerItem">
        <div className="item" style={{ backgroundColor: "#363636" }}>
          <img
            src="https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"
            alt=""
          />
          <h6>Mount & Blade II</h6>
        </div>
        <div className="item">
          <img
            src="https://cdn2.unrealengine.com/egs-football-manager-2023-carousel-mobile-thumb-1200x1600-521bc2670704.jpg"
            alt=""
          />
          <h6>Football Manager 2023</h6>
        </div>
        <div className="item">
          <img
            src="https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg"
            alt=""
          />
          <h6>Genshin Impact</h6>
        </div>
        <div className="item">
          <img
            src="https://cdn2.unrealengine.com/goatsim3-fn-carousel-thumbnail-1200x1600-09b07d157aa0.jpg"
            alt=""
          />
          <h6>Goat Simulator 3</h6>
        </div>
        <div className="item">
          <img
            src="https://cdn2.unrealengine.com/egs-ghostbusters-spirits-unleashed-carousel-thumb-1200x1600-ce822e7e468a.jpg"
            alt=""
          />
          <h6>Ghostbusters: Spirits Unleashed</h6>
        </div>
        <div className="item">
          <img
            src="https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-s2-1200x1600-1200x1600-d9d5421f5d2a.jpg"
            alt=""
          />
          <h6>Gotham Knights</h6>
        </div>
      </div>
    </div>
  );
};
export default Discover;
