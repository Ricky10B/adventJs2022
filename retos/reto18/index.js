function dryNumber(dry, numbers) {
  return [...Array(numbers).keys()]
    .filter(x => `${x+1}`.includes(`${dry}`))
    .map(x => x+1);
}

module.exports = dryNumber
