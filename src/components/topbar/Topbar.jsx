import "./topbar.scss";
import { Person, Mail,GitHub,LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Programmer.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 80XXXXXX76</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>prethiv191@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/prethiv?tab=repositories"><span>github</span></a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/prethiv-nageswaran-6768631b5/"><span>linkedin</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
