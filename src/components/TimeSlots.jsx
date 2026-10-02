import { useState } from "react";
import { timeSlots } from "../data/timeSlots";

function TimeSlots() {
  const [selectedTime, setSelectedTime] = useState(null);

  function handleTimeSlotClick(slot) {
    setSelectedTime(slot);
  }

  function handleCancel() {
    setSelectedTime(null);
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
        <BookingForm selectedTime={selectedTime} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default TimeSlots;