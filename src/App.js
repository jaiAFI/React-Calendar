import { useState } from "react";
import "./App.css";

function App() {

  const dt = new Date();
  const date = dt.getDate();
  const [month, setMonth] = useState(dt.getMonth())
  const year = dt.getFullYear();
  const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonthIndex = new Date(year, month, 1).getDay();


  const daysArray = [];
  for (let i = 1; i <= numberOfDaysInMonth + firstDayOfMonthIndex; i++) {
    if (i > firstDayOfMonthIndex) {
      daysArray.push(i - firstDayOfMonthIndex);
    } else {
      daysArray.push("");
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevHandler = () => {
    setMonth((prev)=> (prev-1))
  }

  const nextHandler = () => {
    setMonth((prev)=> (prev+1))
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="header-container">
            <div className="button" onClick={prevHandler}>Prev</div>
            <div className="month-name">{`${months[month]}, ${year}`}</div>
            <div className="button" onClick={nextHandler}>Next</div>
          </div>
          <div className="daynames-container">
            {days.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="days-container">
            {daysArray.map((number, index) => (
              number!=="" ? <div className={`day-container ${(number === date) && (month==dt.getMonth()) ? "today" : ""}`} key={index}>
                {number}
              </div> : <div key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
