import React from "react";
import CalanderBox from "./CalanderBox";

function Calander() {
  const date = new Date();
  const monthAbbreviation = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="container">
      <div className="  justify-content-between d-flex align-items-center my-3">
        <div className="d-flex  align-items-center ">
          <div>
            <button className="btn btn text-primary">Privous Week</button>
          </div>
          <div className="ms-5">
            <div className="">{monthAbbreviation + " " + day + " " + year}</div>
          </div>
        </div>
        <div>
          <i class="fa fa-caret-right"></i>
          <button className="btn btn text-primary">Next Week</button>
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
      <CalanderBox  />
    </div>
  );
}

export default Calander;
