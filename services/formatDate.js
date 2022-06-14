const formatDate = (infoDate) => {
  const infoDateSplit = infoDate.split('/');
  const day = infoDateSplit[0];
  const month = infoDateSplit[1];
  const year = infoDateSplit[2];
  const date = new Date(year, month - 1, day).toISOString();
  return Date.parse(date);
}

module.exports = { formatDate };