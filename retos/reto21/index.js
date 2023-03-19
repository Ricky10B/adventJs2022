function printTable(gifts) {
  gifts = gifts.map(g => [g.name, '' + g.quantity]);
  gifts.unshift(["Gift", "Quantity"]);
    
  let gift = Math.max(...gifts.map(g => g[0].length));
  let quan = Math.max(...gifts.map(g => g[1].length));

  gifts.splice(1, 0, ["-".repeat(gift), "-".repeat(quan)]);

  let tabla =  gifts.reduce((str, val) =>
    str +
    "| " + val[0].padEnd(gift) +
    " | " + val[1].padEnd(quan) +
    " |" + "\n", '');

  let sup = "+".repeat(gift + quan + 7) + "\n";
  let inf = "*".repeat(gift + quan + 7);
    
  return sup + tabla + inf;
}

module.exports = printTable
