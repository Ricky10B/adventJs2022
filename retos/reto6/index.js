function createCube(size) {
  let total = "";
  Array.from({ length: size }).forEach((_,i) => {
    let index = size - i;
    let sup = " ".repeat(i) + "/\\".repeat(index) + "_\\".repeat(size) + "\n";
    let inf = " ".repeat(i) + "\\/".repeat(index) + "_/".repeat(size) + "\n";
    total = sup + total + inf;
  })
  return total.trimEnd();
}

module.exports = createCube
