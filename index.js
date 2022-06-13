const getDayNumber = (day) => {
  const daysNumber = {
    'seg': 3,
    'ter': 4,
    'qua': 5,
    'qui': 6,
    'sex': 0,
    'sab': 1,
    'dom': 2
  }
  return daysNumber[day];
}

const formatInitialDate = (initialDate) => {
  if (initialDate) {
    const initialDateSplit = initialDate.split('/');
    const day = initialDateSplit[0];
    const month = initialDateSplit[1];
    const year = initialDateSplit[2];
    const dateInitial = new Date(year, month - 1, day).toISOString();
    return Date.parse(dateInitial);
  }
  return Date.now();
}

const getTimestampFinalYear = () => {
  const dayFinalYeary = new Date(new Date().getFullYear(), 11, 31).toISOString();
  return Date.parse(dayFinalYeary);
};

const countDays = (dayNumber, initialDate) => {
  if (!dayNumber) {
    return 'Not found dayNumber'
  } 
  let currentDate = formatInitialDate(initialDate);
  const timestampFinalYear = getTimestampFinalYear();
  let dayCounter = 0;
  while(currentDate < timestampFinalYear) {
    const day = new Date(currentDate);
    if (day.getDay() === dayNumber) {
      dayCounter += 1;
    }
    currentDate += 86400000;
  }
  return dayCounter
}

const day = process.argv[2];
const initialDate = process.argv[3]
const dayNumber = getDayNumber(day);
const countDay = countDays(dayNumber, initialDate);
console.log(countDay);
