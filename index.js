const getDayNumber = (day) => {
  const daysNumber = {
    'dom': 0,
    'seg': 1,
    'ter': 2,
    'qua': 3,
    'qui': 4,
    'sex': 5,
    'sab': 6,
  }
  return daysNumber[day];
}

const formatDate = (infoDate) => {
  const infoDateSplit = infoDate.split('/');
  const day = infoDateSplit[0];
  const month = infoDateSplit[1];
  const year = infoDateSplit[2];
  const date = new Date(year, month - 1, day).toISOString();
  return Date.parse(date);
}

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

const day = process.argv[2];
const initialDate = process.argv[3]
const finalDate = process.argv[4];
if (!day || !initialDate || !finalDate) { 
  return console.log({ err: 'É necessário informar todas as informações (dia, data inicial, data final).' })
}
const dayNumber = getDayNumber(day);
const countDay = countDays(dayNumber, initialDate, finalDate);
console.log(countDay);
