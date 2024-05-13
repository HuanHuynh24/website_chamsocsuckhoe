
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import "../css/confirm.css"; //
const PageConfirm = () => {



    return (
        //nếu lịch đặt thành công thì hiển thị ra 'Đặt Lịch Thành Công'
        <div className='confirm-container'>           
            <div className='box-Notification'> 
                <div className='box-Notification'>
                    <span >Đặt Lịch Thành Công</span>
                </div>
            </div>
            <div className='box-information'>  
                <div>
                    <div>Service schedule details</div>
                </div>          
                
            </div>

            <div className='box-confirm'>
                <div className='box-confirm1'>
                    <div>Confirm cancellation / change of schedule</div>
                </div>
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
    )
}
export default PageConfirm;