
import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import "../css/user.css"; //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";
import { faAngleUp , faAngleDown} from '@fortawesome/free-solid-svg-icons';
import getCookie from "./getCookie";
import * as request from "../../../untils/request"
const NewPage = () => {
  const location = useLocation();
  const { selectedRange, selectedShift } = location.state;
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idkhachhang: getCookie("user"),
    idnuoidung:"",
    tennguoidung:"",
    ngsinh:"",
    gtinh:"",
    sdt:"",
    email:"",
    tinhtrang:"",
    luuy:"",
    diachi:"",
    ca: selectedShift == "morning" ? "1" : "2",
    ngaybatdau:format(selectedRange[0].startDate, "yyyy-MM-dd"),
    ngayketthuc:format(selectedRange[0].endDate, "yyyy-MM-dd"),
    iddv:getCookie("idDV")
  })
  
  const handleGoBack = () => {
    navigate("/bookservice");
  }; 

  const [showDetails, setShowDetails] = useState(true); // State để điều khiển hiển thị của phần thông tin

  const handleExpandDetails = () => {
    setShowDetails(true); // Hiển thị phần thông tin
  };

  const handleCollapseDetails = () => {
    setShowDetails(false); // Ẩn phần thông tin
  };

  const handleFormdata = (e)=>{
    
      setFormData({
        ...formData,
        [e.target.name] :e.target.value
      })
  }

  const handleBook = ()=>{
    console.log(formData)
    request
    .post("khachhang/bookservices", formData)
    .then(()=>alert("Đăng ký dịch vụ thành công"))
    .catch(()=>alert("Đăng ký dịch vụ thất bại"))
  }
  return (
    <div className="new-page-container">
      <div className="new-page1">
        <div>
          <div className="new-page2">
            <div className="page-back">
                <button className="page-back-btn" onClick={handleGoBack}>
                    <div>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div>Back</div>
                </button>
            </div>

        </div>
        <div className="new-page3">
          <div className="page-user">
            <div className="box-1">
              <div className="box-one">
              <label>Citizen identification code*</label>
              <div>
                <input type="text" name="idnuoidung" value={formData.idnuoidung}   onChange={handleFormdata}/>
              </div>
            </div>

            <div className="box-one">
              <label>Name*</label>
              <div>
                <input type="text" name="tennguoidung" value={formData.tennguoidung} onChange={handleFormdata}/>
              </div>
            </div>

            <div className="box-one">
              <label>DATE</label>
              <div>
                <input type="text" name="ngsinh" value={formData.ngsinh} onChange={handleFormdata} placeholder="yyyy-MM-dd"/>
              </div>
            </div>

            
            </div>
            
            <div className="box-2">
              <div className="box-two">
              <label>Gender</label>
              <div>
                <input type="text" name="gtinh" value={formData.gtinh} onChange={handleFormdata} placeholder="Nam/Nữ"/>
              </div>              
              </div>

              <div className="box-three">
              <label>Email*</label>
              <div>
                <input type="email"name="email" value={formData.email} onChange={handleFormdata} />
              </div>
            </div>
                                    
            </div>                                  
            <div className="box-3">
              <div className="box-one">
              <label>Phone*</label>
              <div>
                <input type="tel" name="sdt" value={formData.sdt} onChange={handleFormdata}/>
              </div>
            </div>

            <div className="box-three">
              <label>Address</label>
              <div>
                <input type="text" name="diachi" value={formData.diachi} onChange={handleFormdata}/>
              </div>
            </div>

            </div>  

            <div className="box-4">
              <div className="box-four">
              <label>Pure health and beauty</label>
              <div>
                <input type="text" name="tinhtrang" value={formData.tinhtrang} onChange={handleFormdata}/>
              </div>
            </div>

            <div className="box-four">
              <label>Note</label>
              <div>
                <input type="text" name="luuy" value={formData.luuy} onChange={handleFormdata}/>
              </div>
            </div>
            </div>                 
          </div>

          <div className="page-booking">
            <div className="page-booking-1">
              <div className="page-booking-2">
                <div className="page-booking-3" onClick={() => {
                        if (showDetails) {
                        handleCollapseDetails();
                        } else {
                        handleExpandDetails();
                        }
                        }}>Booking Details</div>
                    <div className="icon-container" >
                    {!showDetails?<FontAwesomeIcon icon={faAngleDown} style={{cursor:"pointer"}}/>: <FontAwesomeIcon icon={faAngleUp} style={{cursor:"pointer"}}/>}
                    </div>

              </div>

              <div className="page-booking-4" >             
                {showDetails && (
                  <div >
                    <input style={{fontSize:"18px", width:"100%"}} className="SV-span" value={selectedRange ? format(selectedRange[0].startDate, "MMM-dd-yyyy") : 'MMM-dd-yyyy'}/>
                    &nbsp;-&nbsp;
                    <input style={{fontSize:"18px", width:"100%"}}  className="SV-span" value={selectedRange ? format(selectedRange[0].endDate, "MMM-dd-yyyy") : 'MMM-dd-yyyy'}/>
                    <input style={{marginTop:25}} className="shift-input" value={selectedShift} />
                  </div>

                )}
            </div>

            </div>
            
            <button className="check-book-bt" onClick={handleBook}>
                    <span className="check-book">Book Now</span>
                </button>

          </div>

        </div>
      </div>

        </div>
        
          
    </div>
  );
};

export default NewPage;
