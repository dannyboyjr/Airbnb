import './CalendarView.css'

const CalendarView = ({ checkin, checkout }) => {
    const generateCalendar = () => {
      // Generate calendar here
    };
  
    const clickDate = (date) => {
      // Handle date click here
    };
  
    return (
      <div className="calendar-view">
        {/* Generate calendar */}
        {generateCalendar().map((week) => (
          <div className="calendar-row">
            {week.map((day) => (
              <div
                className={`calendar-day ${
                  day >= new Date(checkin) && day <= new Date(checkout)
                    ? "selected"
                    : ""
                }`}
                onClick={() => clickDate(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  export default CalendarView