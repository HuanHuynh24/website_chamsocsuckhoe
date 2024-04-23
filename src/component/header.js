import "../assets/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser , faHospitalUser} from '@fortawesome/free-solid-svg-icons'
const HOME = "Home";
const SERVICE = "Service";
const MEMBER = "Member";
const CONTACT = "Contact";
const ABOUTUS = "About us";
const LOG_IN = "Log in"
function Header(){
  return (
    <header className="header">
      <div className="logo">
      <FontAwesomeIcon  icon={faHospitalUser} style={{color: "#fff", fontSize:32}} /><FontAwesomeIcon icon="fa-regular fa-hospital-user" style={{color: "#2383cd",}} />
      <a href="#" style={{marginLeft:5}}>TOM DIXON MD <span style={{color:"#F97425", borderLeft:"1px solid #F97425", marginLeft:5, paddingLeft:5}}>Family Doctor</span></a>
      </div>
      <ul className="listItem">
        <li>
          <a href="#">{HOME}</a>
        </li>
        <li>
          <a href="#">{SERVICE}</a>
        </li>
        <li>
          <a href="#">{MEMBER}</a>
        </li>
        <li>
          <a href="#">{CONTACT}</a>
        </li>
        <li>
          <a href="#">{ABOUTUS}</a>
        </li>
        <li><FontAwesomeIcon style={{color:"red", marginRight:5}} icon={faCircleUser} /><a href="#">{LOG_IN}</a></li>
      </ul>
    </header>
  );
}
export default Header