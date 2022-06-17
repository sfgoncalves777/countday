const { formatDate } = require('./formatDate');
const { getDayNumber } = require('./getDayNumber');

const countDays = (infoInitialDate, infoFinalDate, day) => {
  const dayNumber = getDayNumber(day);
  let currentDate = formatDate(infoInitialDate);
  const timestampFinal = formatDate(infoFinalDate);
  let dayCounter = 0;
  while(currentDate < timestampFinal) {
    const day = new Date(currentDate);
    if (!dayNumber || day.getDay() === dayNumber) {
      dayCounter += 1;
    }
    currentDate += 86400000;
  }
  return day ? dayCounter : dayCounter +1
}

module.exports = { countDays };
