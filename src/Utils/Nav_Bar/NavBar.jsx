import "./NavBar.css";
import { Globe, User } from "phosphor-react";
const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="left_nav_bar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"
          alt=""
        />
        <ul>
          <li style={{ borderBottom: "5px solid#007AFF", color: "white" }}>
            STORE
          </li>
          <li>FAQ</li>
          <li>HELP</li>
          <li>UNREAL ENGINE</li>
        </ul>
      </div>
      <div className="right_nav_bar">
        <ul>
          <li>
            <Globe size={20} weight="light" />
          </li>
          <li style={{paddingRight:"10px"}}>
            <User style={{marginRight:"10px"}} size={20} weight="light" />
            SGIN IN
          </li>
          <li id="DOWNLOAD">DOWNLOAD</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
