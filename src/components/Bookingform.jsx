import { useState } from "react";

function BookingForm({ selectedTime, onCancel }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Booking submitted:", { time: selectedTime, ...formData });
    setIsSubmitted(true);
  }

  function handleCancelBooking() {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    onCancel(); // tell the parent to clear selectedTime too
  }

  if (isSubmitted) {
    return (
      <div>
        <p>
          ✅ Booking confirmed for {selectedTime}! A confirmation will be
          sent to {formData.email}.
        </p>
        <button onClick={handleCancelBooking}>Cancel Booking</button>
      </div>
    );
  }

  return (
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
  );
}

export default BookingForm;