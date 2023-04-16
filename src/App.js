import "./App.css";
import Discover from "./Home_Page/Components/Discover/Discover";
import NavBar from "./Utils/Nav_Bar/NavBar";
import Search from "./Utils/Search/Search";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="language">
        <ul>
          <li>العربية</li>
          <li>English</li>
          <li>French </li>
          <li>Haitian </li>
          <li>Spanish</li>
          <li>Romanian</li>
          <li>Russian</li>
        </ul>
      </div>
      <div className="bd">
        <Search />
        <Discover />
      </div>
    </div>
  );
}

export default App;
