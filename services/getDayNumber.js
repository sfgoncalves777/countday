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

export { getDayNumber }