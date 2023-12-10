import React,{useState} from 'react'
import Createcontext from './Createcontext'
function Dataprovider(props) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [timeZone, setTimeZone] = useState('[UTS-5] Eastern Standard Time');
    const handleTimeZoneChange = (event) => {
        setTimeZone(event.target.value);
      };
    
  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    const options = { weekday: "short", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Get the days of the week (Monday to Friday) starting from the current date
  const daysOfWeek = Array.from({ length: 6 }, (_, index) => {
    const day = new Date(currentDate);
    day.setDate(day.getDate() + index);
    return day;
  });

  return (
    <Createcontext.Provider value={{
        nextWeek,
        previousWeek,
        formatDate,
        daysOfWeek,
        currentDate,
        timeZone,
        handleTimeZoneChange
        
    
    }}>
        {props.children}
    </Createcontext.Provider>
  )
}

export default Dataprovider