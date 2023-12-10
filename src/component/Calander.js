import React, { useContext } from "react";
import CalanderBox from "./CalanderBox";
import Createcontext from "./Context/Createcontext";

function Calander() {

  const { nextWeek, previousWeek, currentDate } =useContext(Createcontext);
    const monthAbbreviation = currentDate.toLocaleString("default", { month: "short" });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  return (
    <div className="container">
      <div className="d-flex my-2 p-2  align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <button className="btn btn text-primary" onClick={previousWeek}>
              Previous Week
            </button>
          </div>
          <div className="ms-5">
            <div className="">{
              // show month adn corrent date and year
              monthAbbreviation + " " + day + " " + year
            }</div>
          </div>
        </div>
        <div>
          <button className="btn btn text-primary" onClick={nextWeek}>
            Next Week
          </button>
        </div>
      </div>

      <div>
        <p>TimeZone:</p>
        <select className="form-select form-select-sm p-2">
          <option
            value="
          [UTS-5] Eastern Standard Time
          "
          >
            [UTS-5] Eastern Standard Time
          </option>
          <option value=" [UTS-6] Central Standard Time">
            [UTS-6] Central Standard Time
          </option>
        </select>
      </div>
      <CalanderBox />
    </div>
  );
}

export default Calander;
