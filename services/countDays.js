const { formatDate } = require('./formatDate');
const { getDayNumber } = require('./getDayNumber');

const countDays = (infoInitialDate, infoFinalDate, day) => {
  const daysNumbers = getDayNumber(day);
  let currentDate = formatDate(infoInitialDate);
  const timestampFinal = formatDate(infoFinalDate);
  let dayCounter = 0;
  while(currentDate <= timestampFinal) {
    const day = new Date(currentDate);
    if (!daysNumbers || daysNumbers.includes(day.getDay())) {
      dayCounter += 1;
    }
    currentDate += 86400000;
  }
  return dayCounter
}

module.exports = { countDays };
