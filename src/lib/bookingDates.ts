const currentBookingYear = new Date().getFullYear();
const nextBookingYear = currentBookingYear + 1;

const limitedAvailabilityText = `Limited dates remaining for ${currentBookingYear}`;
const bookingYearsText = `Booking ${currentBookingYear} & ${nextBookingYear}`;

export {
  bookingYearsText,
  currentBookingYear,
  limitedAvailabilityText,
  nextBookingYear,
};