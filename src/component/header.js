import "../assets/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser , faHospitalUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HOME = "Home";
const SERVICE = "Service";
const MEMBER = "Member";
const CONTACT = "Contact";
const ABOUTUS = "About us";
const FORUM = "Forum";
const LOG_IN = "Log in"
function Header(){
  const [hideHeader, setHideHeader] = useState(false);
  const [heightBefore, setHeight]  = useState(0)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     setHideHeader(scrollTop > heightBefore);
  //     setHeight(scrollTop)
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [heightBefore]);

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      window.scrollTo({
        top: component.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={hideHeader ? "header hidden" : "header"}>
      <div className="logo">
      <FontAwesomeIcon  icon={faHospitalUser} style={{color: "#fff", fontSize:32}} />
      <FontAwesomeIcon icon="fa-regular fa-hospital-user" style={{color: "#2383cd",}} />
      <a href="#" style={{marginLeft:5}}>TOM DIXON MD <span style={{color:"#F97425", borderLeft:"1px solid #F97425", marginLeft:5, paddingLeft:5}}>Family Doctor</span></a>
      </div>
      <ul className="listItem">
        <li>
          
         <Link to ="/">{HOME}</Link>
        </li>
        <li>
        <Link to="/" onClick={() => scrollToComponent("service")}>{SERVICE}</Link>
        </li>
        <li>
          <Link to ="/Member">{MEMBER}</Link>      
        </li>
        <li>
          <Link to ="/contact">{CONTACT}</Link>
        </li>
        <li>
          <a href="#">{FORUM}</a>
        </li>
        <li>
          <a href="#">{ABOUTUS}</a>
        </li>
        <li>
          <FontAwesomeIcon style={{color:"#fff",fontSize: 27, marginRight:10}} icon={faCircleUser} />
        <Link to ="/login">{LOG_IN}</Link>
        </li> 
      </ul>      
    </header>
    
  );
}
export default Header