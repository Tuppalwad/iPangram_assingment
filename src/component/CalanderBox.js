import React,{useContext} from "react";
import Times from "./Times";
import Createcontext from "./Context/Createcontext";
function CalanderBox() {
  const { formatDate, daysOfWeek } = useContext(Createcontext);
  return (
    <div className="my-2 p-2">
      
      <table className="table table-0">
        <tbody>
          {daysOfWeek.slice(1, 6).map((day, index) => (
            <tr key={day} className="row">
              <td className="col-1 bg-light p-4">
                <p>
                  {formatDate(day)}
                </p>
              </td>
              <td className="col-11">
                <div className="ms-3">{index < 2 ? "Past" : <Times />}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalanderBox;
