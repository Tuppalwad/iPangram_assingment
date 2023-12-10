import React from 'react'

function Times() {

    const T1 = [
        "8 AM","8:30 AM", "9 AM", "9:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM"]
    const T2 = [
        "12 PM","12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM","4 PM","4:30 PM","5 PM"]
    const T3 = [
        "6 PM","6:30 PM", "7 PM", "7:30 PM", "8 PM", "8:30 PM", "9 PM", "9:30 PM","10 PM","10:30 PM","11 PM"]
  return (
    <div className=''>

        <div className='d-flex my-2'>
            {
                T1.map((time,index) => (
                    <div key={index}>
                        <form>
                            <input type='checkbox' className='ms-1' name ='box' value={time} ></input>
                            <label className='ms-2'>{time}</label>
                        </form>
                    </div>
                ))
            }
            
        </div>
        <div className='d-flex my-2'>
            {
                T2.map((time,index) => (
                    <div key={index}>
                        <form>
                            <input type='checkbox' className='ms-1' name ='box' value={time} ></input>
                            <label className='ms-2'>{time}</label>
                        </form>
                    </div>
                ))
            }
           
        </div>
        <div className='d-flex my-2'>
          {
                T3.map((time,index) => (
                    <div key={index}>
                        <form>
                            <input type='checkbox' className='ms-1' name ='box' value={time} ></input>
                            <label className='ms-2'>{time}</label>
                        </form>
                    </div>
                ))
          }
        
        </div>
    </div>
  )
}

export default Times