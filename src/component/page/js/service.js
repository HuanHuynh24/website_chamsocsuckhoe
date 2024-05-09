import * as request from "../../../untils/request"
import { useState , useEffect} from "react";
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
      console.log(listService);
      return(
        <div className="container-service" id="service">
          <div className="container">
            <div className="row " style={{ flexDirection: "column" }}>
              <h1 className="color-heading" data-aos="zoom-in-up">
                How Can I Help You
              </h1>
              <div className="service row">
                {listService.map((service1) => {
                  console.log(service1)
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
                      <button className="btnBooknow btn" >Book now</button>
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

