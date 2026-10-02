import { useState } from "react";
import { timeSlots } from "../data/timeSlots";


function TimeSlots() {
  const [selectedTime, setSelectedTime] = useState(null);
  function handleTimeSlotClick(slot) {
    setSelectedTime(slot);
  }
  return (
    <div>
      <h2>Available Time Slots</h2>

      <div>
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            disabled={!slot.available}
            onClick={() => handleTimeSlotClick(slot.time)} 
          >
            {slot.time}
          </button>
        ))}
      </div>

      {selectedTime && (
        <p> You have selected: {selectedTime} </p>
      )
      }
    </div>
  );
}

export default TimeSlots;