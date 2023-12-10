import React, { useContext } from "react";
import CalanderBox from "./CalanderBox";
import Createcontext from "./Context/Createcontext";

function Calander() {
  const { nextWeek, previousWeek, currentDate,handleTimeZoneChange,timeZone } = useContext(Createcontext);
  const monthAbbreviation = currentDate.toLocaleString("default", {
    month: "short",
  });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  return (
    <div className="container">
      <div className="d-flex my-2 p-2  align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <i
              class="fa fa-caret-left "
              style={{

                fontSize: "20px",
              }}
            ></i>
            <button className="btn btn text-primary" onClick={previousWeek}>
              Previous Week
            </button>
          </div>
          <div className="ms-5">
            <div className="">
              {
                monthAbbreviation + " " + day + " " + year
              }
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <button className="btn btn text-primary" onClick={nextWeek}>
            Next Week
          </button>
          <i
            class="fa fa-caret-right "
            style={{

              fontSize: "20px",
            }}
          ></i>
        </div>
      </div>

      <div>
        <p>TimeZone:</p>
        <select className="form-select form-select-sm p-2" onChange={handleTimeZoneChange} value={timeZone}>
          <option value="[UTS-5] Eastern Standard Time">[UTS-5] Eastern Standard Time</option>
          <option value="[UTS-6] Central Standard Time">[UTS-6] Central Standard Time</option>
        </select>
      </div>
      <CalanderBox />
    </div>
  );
}

export default Calander;
