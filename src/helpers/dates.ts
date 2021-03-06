// https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const calculateDay = (d: Date, daysInPast: number) =>
  new Date(d.setDate(d.getDate() + daysInPast));

export const getFormattedDateString = (d: Date) => {
  const month = months[d.getMonth()];
  const dayName = days[d.getDay()];
  const day = d.getDate();
  return `${dayName}, ${month} ${day}`;
};

export const getStorageDateString = (d: Date = new Date()) => {
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  return `${day}${month}${year}`;
};

export const datesAreOnSameDay = (first, second) => {
  if (!first || !second) {
    return false;
  }

  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

export const getDay = (d: Date) => d.getDate();
