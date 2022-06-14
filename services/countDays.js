const { formatDate } = require('./formatDate');

const countDays = (dayNumber, infoInitialDate, infoFinalDate) => {
  let currentDate = formatDate(infoInitialDate);
  const timestampFinal = formatDate(infoFinalDate);
  let dayCounter = 0;
  while(currentDate < timestampFinal) {
    const day = new Date(currentDate);
    if (day.getDay() === dayNumber) {
      dayCounter += 1;
    }
    currentDate += 86400000;
  }
  return dayCounter
}

module.exports = { countDays };