function wrapping(gifts) {
  return gifts.map(g => {
    let a = "*".repeat(g.length + 2);
    return a + "\n*" + g + "*\n" + a
  });
}

module.exports = wrapping
