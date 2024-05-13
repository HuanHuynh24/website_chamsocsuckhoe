import * as request from "../../../untils/request"
import { useState , useEffect} from "react";
import getCookie from "./getCookie";
const Service = (() =>{
    const [listService, setlistService] = useState([]);
    useEffect(() => {
        request
        .get('dichvu/danhsach')
          .then(function (servervice) {
            setlistService(servervice);
          })
          .catch((error) => console.log("loi"));
      }, []);
      const handleBook = (service)=>{
          request
          .get('khachhang/login',{
            headers: {
              Authorization: `Bearer ${getCookie}` 
            }
          })
          .then((response)=>{
            console.log(response)
          })
          .catch((response)=>{
            window.location.href = "/login"
            alert("Vui lòng đăng nhập trước")
          })
      }
      return(
        <div className="container-service" id="service">
          <div className="container">
            <div className="row " style={{ flexDirection: "column" }}>
              <h1 className="color-heading" data-aos="zoom-in-up">
                How Can I Help You
              </h1>
              <div className="service row">
                {listService.map((service1) => {
                  return (
                    <div key={service1.idDV} className="itemService" data-aos="zoom-in-up">
                      <img
                        className="imgService"
                        src={require("../img/" + service1.anh)}
                        alt="image service"
                        style={{ width: "100%", height: "auto" }}
                      />
                     
                      <div className="overlayImg"></div>
                      <p style={{ marginBottom: 40 }}>{service1.tenDichVu}</p>
                      <button className="btnBooknow btn" onClick={()=>handleBook(service1.idDichVu)}>Book now</button>
                    </div>
                  );
                })}
              </div>
              <button
                className="customBtn btn"
                data-aos="zoom-in-up"
                style={{ marginTop: 50, width: 200 }}
              >
                More service
              </button>
            </div>
          </div>
        </div>
      )
})
export default Service

