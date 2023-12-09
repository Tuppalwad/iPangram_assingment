import React from "react";
import Times from "./Times";

function CalanderBox(props) {
  return (
    <div className="my-2 p-2">
      <table className="table table-0 ">
        <tbody
          className="
      
      "
        >
          <tr className="row">
            <td className="col-1 bg-light p-3">
              <p>
                Mon <br />
                {12}/{12}
              </p>
            </td>
            <td className="col-11 ">
              <div className="ms-3 ">Past</div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-1 bg-light p-3">
              {" "}
              <p>
                Tue <br />
                {12}/{12}
              </p>
            </td>
            <td className="col-11">
              <div className="ms-3 ">Past</div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-1 bg-light p-3">
              {" "}
              <p>
                Wed <br />
                {12}/{12}
              </p>
            </td>
            <td className="col-11">
              <div className="ms-3 ">
                <Times />
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-1 bg-light p-3">
              {" "}
              <p>
                Thu <br />
                {12}/{12}
              </p>
            </td>
            <td className="col-11">
              <div className="ms-3 ">
                <Times />
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-1 bg-light p-3">
              {" "}
              <p>
                Fir <br />
                {12}/{12}
              </p>
            </td>
            <td className="col-11">
              <div className="ms-3 ">
                <Times />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalanderBox;
