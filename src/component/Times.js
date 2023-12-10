import React, { useContext } from 'react';
import Createcontext from './Context/Createcontext';

function Times() {
  const { timeZone } = useContext(Createcontext);

  const generateTimes = () => {
    const times = [];
    const timeZoneOffset = timeZone === '[UTS-5] Eastern Standard Time' ? 0 : -1;
    const rows = [];

    for (let hour = 8 + timeZoneOffset; hour <= 23 + timeZoneOffset; hour++) {
      for (let minute of ['00', '30']) {
        const formattedTime = `${(hour + 24) % 12 || 12}:${minute} ${hour + timeZoneOffset < 12 ? 'AM' : 'PM'}`;
        times.push(formattedTime);
      }
    }

    // Split the times into rows
    for (let i = 0; i < times.length; i += 8) {
      rows.push(times.slice(i, i + 8));
    }

    return rows;
  };

  return (
    <div className=''>
      <div>
        {generateTimes().map((row, rowIndex) => (
          <div key={rowIndex} className='d-flex my-2'>
            {row.map((time, index) => (
              <div key={index}>
                <form>
                  <input type='checkbox' className='ms-1' name='box' value={time}></input>
                  <label className='ms-2'>{time}</label>
                </form>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Times;
