function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1,...a2,...a3])].filter(valor =>
    a1.includes(valor) + a2.includes(valor) + a3.includes(valor) === 1
  );
}

module.exports = getGiftsToRefill
