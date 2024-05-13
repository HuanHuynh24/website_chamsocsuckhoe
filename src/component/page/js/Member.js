import { useState , useEffect} from "react";
import { addDays,format } from "date-fns";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../css/calendar.css"; //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp , faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import request from "../../../untils/request";
const Member = () => {

    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key:"selection"
        }
    ] );
    useEffect(() => {
        checkCa();
    }, [selectedRange[0].startDate, selectedRange[0].endDate]);
    const [ca, setCa] = useState({
        ca1:"",
        ca2:""
    })
    const checkCa = (e)=>{
        request
        .get('khachhang/checkdate',{
            params: {
                ngbatdau: format(selectedRange[0].startDate, "yyyy-MM-dd") ,
                ngketthuc: format(selectedRange[0].endDate, "yyyy-MM-dd")
            }})
        .then((response)=>{
            // console.log(response.data)
            setCa(
                {
                  ca1:response.data.ca1,
                  ca2:response.data.ca2
                }
              )
        })
        .catch((error)=>{
            console.log(error)
        })
        
        
    }
    const handleDateSelect = (item) => {
        setSelectedRange([item.selection]); // Cập nhật trạng thái với ngày bắt đầu và ngày kết thúc được chọn
    };
    console.log(format(selectedRange[0].startDate, "yyyy-MM-dd"), format(selectedRange[0].endDate, "yyyy-MM-dd"));

    const [showShift, setShowShift] = useState(false);

  const handleCheckAvailabilityClick = () => {

    setShowShift(!showShift);
  };
  const handleShiftSelect = (shift) => { // Hàm xử lý khi chọn buổi
        setSelectedShift(shift);
        console.log("Selected shift:", shift);
    };
    console.log(showShift)
    const [selectedShift, setSelectedShift] = useState("");

    const [showDetails, setShowDetails] = useState(true); // State để điều khiển hiển thị của phần thông tin

  const handleExpandDetails = () => {
    setShowDetails(true); // Hiển thị phần thông tin
  };

  const handleCollapseDetails = () => {
    setShowDetails(false); // Ẩn phần thông tin
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/moreinformation", {
        state: {
            selectedRange: selectedRange,
            selectedShift: selectedShift,
            showDetails: showDetails
        }
    });
  };
  console.log(ca)
    return(
       <>
       <h1 style={{textAlign:"center", marginTop:100, color:"rgb(5, 71, 147)"}}>Let's start booking the service</h1>
        <div className="calendar-container">
            
            <div className="calendarWarp">
                <div className="select">
                <h1>Select a Date And Time</h1>
            </div>
                <DateRange 
                    onChange={handleDateSelect}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={selectedRange}
                    months={1}
                    direction="horizontal"
                />
            </div>   
            <div className="check">
                <span >
                    <input className="CK-span" value={format(selectedRange[0].startDate, "MMM-dd-yyyy")}/>
                    &nbsp;,&nbsp;
                    <input className="CK-span"value={format(selectedRange[0].endDate, "MMM-dd-yyyy")} />
                </span>
                <button className="check-bt" onClick={handleCheckAvailabilityClick}>
                    <span className="check-span">Check Next availability</span>
                    {showShift && (
                   <div className="shift">
                       <button className={ca.ca1==1?"shift-btn":"shift-btn disabled-button"} onClick={() => handleShiftSelect("morning")}>morning</button>
                       <button className={ca.ca2==1?"shift-btn":"shift-btn disabled-button"} onClick={() => handleShiftSelect("afternoon")}>afternoon</button>
                   </div>
                    )}
                </button>
            </div>
            <div className="service_detail">
                <div className="service_detail-1">
                    <div className="service_detail-2">
                    <div className="service_detail-3" >Service Details</div>
                    <div className="icon-container" onClick={() => {
                        if (showDetails) {
                        handleCollapseDetails();
                        } else {
                        handleExpandDetails();
                        }
                        }}>
                    {!showDetails?<FontAwesomeIcon icon={faAngleDown} style={{cursor:"pointer"}}/>: <FontAwesomeIcon icon={faAngleUp} style={{cursor:"pointer"}}/>}
                  
                    </div>
                </div>

                <div className="service_detail-4">
                    {showDetails && ( // Hiển thị phần thông tin nếu showDetails là true
                    <div>
                       <input className="SV-span"  value={format(selectedRange[0].startDate, "MMM-dd-yyyy")} />
                       &nbsp;,&nbsp;
                       <input className="SV-span" value={format(selectedRange[0].endDate, "MMM-dd-yyyy")} />   
                       <input className="shift-input" value={selectedShift} />
                     </div>
                    )}
                </div>

                </div>
                <button className="check-span-bt" onClick={handleButtonClick}>
                    <span className="check-span">Next</span>
                </button>
            </div>                       
        </div></>
    )
}
export default Member;