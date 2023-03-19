function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => b.l - a.l).slice(1).every((box, i) => 
    box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
  )
}

module.exports = fitsInOneBox
