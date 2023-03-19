function getCompleted(part, total) {
  part = part.split(":")
  total = total.split(":")

  let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2]
  let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2]
  
  let a = partRed;
  let b = totalRed;
  let c;
  while (b) {
    c = b
    b = a % b
    a = c
  } 

  let partEnd = partRed / a
  let totalEnd = totalRed / a

  return partEnd + "/" + totalEnd
}

module.exports = getCompleted
