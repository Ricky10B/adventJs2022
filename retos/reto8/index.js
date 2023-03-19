function checkPart(part) {
  part =part.split("");
  const i = part.findIndex((p,ind) => p != part.at(-ind-1));
  delete part[i];
  if(part.join("") == part.reverse().join("")) return true;
  delete part[i];
  return part.join("") == part.reverse().join("");
}

module.exports = checkPart
