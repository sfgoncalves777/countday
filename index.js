const { getDayNumber, countDays } = require('./services');

const day = process.argv[2];
const initialDate = process.argv[3]
const finalDate = process.argv[4];
if (!day || !initialDate || !finalDate) { 
  return console.log({ err: 'É necessário informar todas as informações (dia, data inicial, data final).' })
}
const dayNumber = getDayNumber(day);
const countDay = countDays(dayNumber, initialDate, finalDate);
console.log(countDay);
