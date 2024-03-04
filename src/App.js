import "./App.css";

function App() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysArray = [];
  for (let i = 1; i <= 30; i++) {
    daysArray.push(i);
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="header-container">
            <div className="prev-button">Prev</div>
            <div className="month-name">{`March, 2024`}</div>
            <div className="next-button">Next</div>
          </div>
          <div className="daynames-container">
            {days.map((day) => (
              <div>{day}</div>
            ))}
          </div>
          <div className="days-container">
            {daysArray.map((number, index) => (
              <div className="day-container" key={index}>{number}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
