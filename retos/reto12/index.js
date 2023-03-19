function selectSleigh(distance, sleighs) {
  const name = sleighs.filter(s => s.consumption * distance <= 20).at(-1);
  return name ? name.name : null;
}

module.exports = selectSleigh
