const { countDays } = require('./services');

const initialDate = process.argv[2]
const finalDate = process.argv[3];
const days = process.argv[4];

if (!initialDate || !finalDate) { 
  return console.log({ err: 'É necessário informar as informações obrigatórias (data inicial, data final).' })
}

const countDay = countDays(initialDate, finalDate, days);
console.log(countDay);
