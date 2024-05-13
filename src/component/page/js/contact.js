import React from 'react';
import "../css/contact.css"; //
import { useEffect, useRef, useState } from 'react';
import { DateRange} from 'react-date-range';
import { addDays } from 'date-fns';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import Select from "react-select"
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  
  const navigate = useNavigate();
    const options = [
    { value: "morning", label: "Morning Shift" },
    { value: "afternoon", label: "Afternoon Shift" },
    ,
  ]
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key:"selection"
        }
    ])
    const [showDetails, setShowDetails] = useState(true); // State để điều khiển hiển thị của phần thông tin

  const handleExpandDetails = () => {
    setShowDetails(true); // Hiển thị phần thông tin
  };

  const handleCollapseDetails = () => {
    setShowDetails(false); // Ẩn phần thông tin
  };
    const refOne = useRef(null)

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnOutsideClick, true)
    }, [])

    const hideOnEscape = (e) => {
        console.log(e.key)
        if (e.keyCode === "Escape") {
            setOpen(false)
        }
    }

    const hideOnOutsideClick = (e) => {
        if(refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }
    const handleDateRangeChange = (item) => {
    if (item && item.selection) {
        const startDate = item.selection.startDate;
        const endDate = item.selection.endDate;
        setRange([item.selection]);
        console.log(`${format(startDate, "MM/dd/yy")} to ${format(endDate, "MM/dd/yy")}`);
    }
     };

const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(selectedOption); // Log giá trị đã chọn ra console
    };
   const handleGoConfirm = () => {
    navigate("/confirm", {
        state: {
            range: range,
            selectedOption: selectedOption
        }
    });
  }; 

    const [open, setOpen] = useState(false)
    return (
        <div className="new-page-container-n">
      <div className="new-page1-n">
        <div>
          <div className="new-page2-n">
            <div className="calendarWrap">
                <div className='calendar-btn'>
                    <input
                        value={ `${format(range[0].startDate, "dd/MM/yyyy")} - ${format(range[0].endDate, "dd/MM/yyyy")}`}
                        readOnly
                        className="inputBox"
                        onClick={ () => setOpen(open => !open)                  
                     }
                    />
                    <div ref={refOne}>
                    {open && 
                    <DateRange 
                    onChange={handleDateRangeChange}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction='horizontal'
                    className='calendarElement'
                   />   
                   }
                </div>
                </div>
                <div className='select-option' >
                    <Select options={options} value={selectedOption}
                    onChange={handleSelectChange}/>
                </div>                
                         
            </div>
        </div>
        <div className="new-page3-n">
          <div className="page-user-n">
            <div className="box-1-n">
              <div className="box-one-n">
              <label>ID User*</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-one-n">
              <label>Name*</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-one-n">
              <label>DATE</label>
              <div>
                <input type="text" />
              </div>
            </div>

            
            </div>
            
            <div className="box-2-n">
              <div className="box-two">
              <label>Sex</label>
              <div>
                <input type="text" />
              </div>              
              </div>

              <div className="box-three-n">
              <label>Email*</label>
              <div>
                <input type="email" />
              </div>
            </div>
                                    
            </div>                                  
            <div className="box-3-n">
              <div className="box-one">
              <label>Phone*</label>
              <div>
                <input type="tel" />
              </div>
            </div>

            <div className="box-three-n">
              <label>Address</label>
              <div>
                <input type="text" />
              </div>
            </div>

            </div>  

            <div className="box-4-n">
              <div className="box-four-n">
              <label>Pure health and beauty</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="box-four-n">
              <label>Note</label>
              <div>
                <input type="text" />
              </div>
            </div>
            </div>                 
          </div>

          <div className="page-booking-n">
            <div className="page-booking-1-n">
              <div className="page-booking-2-n">
                <div className="page-booking-3-n" onClick={() => {
                        if (showDetails) {
                        handleCollapseDetails();
                        } else {
                        handleExpandDetails();
                        }
                        }}>
                  Booking Details
                  </div>
                    <div className="icon-container-n" >

                    </div>

              </div>

              <div className="page-booking-4-n" >  
              {showDetails && (           
               <div>
                <input
                        value={ `${format(range[0].startDate, "dd/MM/yyyy")} - ${format(range[0].endDate, "dd/MM/yyyy")}`}
                        readOnly
                        className="inputBox"
                        onClick={ () => setOpen(open => !open)                  
                     }
                     />   
                     
                      <input value={selectedOption ? selectedOption.label : ''}/>                                    
              </div> 
              )}
            </div>
            <button className="check-book-bt-n" onClick={handleGoConfirm}>
                    <span className="check-book-n">Book Now</span>
            </button>

            <div className='box-confirm2'>
                    <button className='box-confirm-btn'>
                        <div>
                            <FontAwesomeIcon icon={faUndo} />
                        </div>
                        <div className='confirm-1'>CancelCalendar</div>
                    </button>                
                </div>

            <div className='box-confirm2'>
                    <button className='box-confirm-btn'>
                        <div>
                            <FontAwesomeIcon icon={faRectangleXmark} />
                        </div>
                        <div className='confirm-1'>Reschedule</div>
                    </button>                  
                </div>
                    
            </div>
            
            

          </div>

        </div>
      </div>

        </div>                
    </div>
    )

}

export default Contact;