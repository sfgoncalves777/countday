const getDayNumber = (days) => {
  if (!days) {
    return;
  }
  const daysNumber = {
    'dom': 0,
    'seg': 1,
    'ter': 2,
    'qua': 3,
    'qui': 4,
    'sex': 5,
    'sab': 6,
  }
  const daysSplit = days.split(',');
  const daysNumbers = [];
  for(let day of daysSplit) {
    daysNumbers.push(daysNumber[day]);
  }
  return daysNumbers;
}

module.exports = { getDayNumber }
