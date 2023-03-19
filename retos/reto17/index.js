function carryGifts(gifts, maxWeight) {
  gifts = gifts.filter(gift => gift.length <= maxWeight);

  let carry = ['']
  gifts.forEach(gift => {
    const previousWeight = carry.at(-1).replaceAll(" ", '').length
    if ((previousWeight + gift.length) <= maxWeight) {
      carry[carry.length - 1] += ' ' + gift;
      carry[carry.length - 1] = carry[carry.length - 1].trim();
      return;
    }
    carry.push(gift);
  })
  return carry.filter(c => c != '');
}

module.exports = carryGifts
