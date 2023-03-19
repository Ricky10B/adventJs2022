function countHours(year, holidays) {
  return holidays.filter(holiday => 
    ![0,6].includes(new Date(year + "/" + holiday).getDay())
  ).length * 2;
}

module.exports = countHours
