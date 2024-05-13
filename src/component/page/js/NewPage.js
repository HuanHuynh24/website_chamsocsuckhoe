
import React, { useState } from "react";
import "../css/user.css"; //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const NewPage = () => {
  const location = useLocation();
  const { selectedRange, selectedShift } = location.state;
    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/Member");
  };
  

  const [showDetails, setShowDetails] = useState(true); // State để điều khiển hiển thị của phần thông tin

  const handleExpandDetails = () => {
    setShowDetails(true); // Hiển thị phần thông tin
  };

  const handleCollapseDetails = () => {
    setShowDetails(false); // Ẩn phần thông tin
  };


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
              <label>ID User*</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-one">
              <label>Name*</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-one">
              <label>DATE</label>
              <div>
                <input type="text" />
              </div>
            </div>

            
            </div>
            
            <div className="box-2">
              <div className="box-two">
              <label>Sex</label>
              <div>
                <input type="text" />
              </div>              
              </div>

              <div className="box-three">
              <label>Email*</label>
              <div>
                <input type="email" />
              </div>
            </div>
                                    
            </div>                                  
            <div className="box-3">
              <div className="box-one">
              <label>Phone*</label>
              <div>
                <input type="tel" />
              </div>
            </div>

            <div className="box-three">
              <label>Address</label>
              <div>
                <input type="text" />
              </div>
            </div>

            </div>  

            <div className="box-4">
              <div className="box-four">
              <label>Pure health and beauty</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-four">
              <label>Note</label>
              <div>
                <input type="text" />
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
                   <FontAwesomeIcon icon={faAngleUp} />
                    </div>

              </div>

              <div className="page-booking-4" >             
                {showDetails && (
                  <div >
                    <input className="SV-span" value={selectedRange ? selectedRange[0].startDate : 'MMM-dd-yyyy'}/>
                    &nbsp;-&nbsp;
                    <input className="SV-span" value={selectedRange ? selectedRange[0].endDate : 'MMM-dd-yyyy'}/>
                    <input className="shift-input" value={selectedShift} />
                  </div>

                )}
            </div>

            </div>
            
            <button className="check-book-bt" >
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
