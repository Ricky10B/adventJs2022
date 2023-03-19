function fixLetter(letter) {
  letter = letter.trim().replaceAll(/\s+/g, " ");
  letter = letter.replaceAll(/santa\s{1,}claus/gi, "Santa Claus");
  letter = letter.replaceAll(/\s,|\s\./g, c => c[1]);
  letter = letter.replaceAll(/,\S/g, c => c[0] + " " + c[1]);
  letter = letter.replaceAll(/(\s*\?{1,})/g, "?");
  letter = letter.replaceAll(/[a-zA-Z]$/g, c => c + ".");
  letter = letter.replaceAll(/(^[a-z])|[\.\?\!]\s[a-z]/g, c => c.toUpperCase());
  return letter;
}

module.exports = fixLetter
