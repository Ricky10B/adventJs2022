function canExit(maze) {
  const replace = arr => arr.join("")
                          .replace(/[S][\sE]/, "SS")
                          .replace(/[\sE][S]/, "SS")
                          .split("");

  const iterate = maze[0].length * maze.length;
  Array.from({ length: iterate }, (_, i) => i).forEach(() => {
    maze.forEach((arrH, i) => {
      maze[i] = replace(arrH);
      let v = maze[0].map((_, i) => replace(maze.map(x => x[i])));
      maze[i] = v.map(x => x[i]);
    });
  })

  return !maze.flat().includes("E");
}

module.exports = canExit
