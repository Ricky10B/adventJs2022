function executeCommands(commands) {
  let memoria = [0, 0, 0, 0, 0, 0, 0, 0];

  let cpu = {
    'MOV': (mems) => {
      const mem = mems.split(" ")[1].split(",")[0];
      let num = (memoria[mem.at(-1)] * !!mem.startsWith("V")) + ~~mem;
      memoria[mems.at(-1)] = num;
    },
    "ADD": (mems) => {
      mems = mems.split(",");
      let v1 = mems[0].at(-1);
      let v2 = mems[1].at(-1);
      memoria[v1] = (memoria[v1] + memoria[v2]) % 256;
    },
    "INC": (mems) => {
      memoria[mems.at(-1)] = ++memoria[mems.at(-1)] % 256;
    },
    "DEC": (mems) => {
      memoria[mems.at(-1)] = ((--memoria[mems.at(-1)] % 256) + 256 ) % 256;
    },
    "JMP": (mems) => {
      const index = (commands.indexOf(mems) + 1) * !!memoria[0];
      let slc = commands.slice(+mems.split(" ")[1], index);
      commands.splice(commands.lastIndexOf(mems)+1, 0, ...slc);
    }
  };

  for(let i = 0; i < commands.length; i++) {
    const com = commands[i].split(" ");
    cpu[com[0]](commands[i]);
  };

  return memoria;
}

module.exports = executeCommands
