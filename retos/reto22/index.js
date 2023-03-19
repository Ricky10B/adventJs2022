function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((sn,i) => {
    const index = systemNames.slice(i+1).indexOf(sn) + 1 +i;
    return stepNumbers[i] < stepNumbers[index] + !(systemNames.lastIndexOf(sn) - i);
  });
}

module.exports = checkStepNumbers
