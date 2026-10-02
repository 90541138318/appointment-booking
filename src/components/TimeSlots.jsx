import { useState } from "react";
import { timeSlots } from "../data/timeSlots";


function TimeSlots() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);


  function handleTimeSlotClick(slot) {
    setSelectedTime(slot);
    setIsSubmitted(false); // reset if they pick a new time after submitting
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // for now, just log it — later this becomes a fetch/POST call
    console.log("Booking submitted:", {
      time: selectedTime,
      ...formData,
    });
    setIsSubmitted(true);
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

      {selectedTime && !isSubmitted && (
        <div>
          <p>You selected: {selectedTime}</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}

      {isSubmitted && (
        <p>
          ✅ Booking confirmed for {selectedTime}! A confirmation will be
          sent to {formData.email}.
        </p>
      )}
    </div>
  );
}
export default TimeSlots;