function getFilesToBackup(lastBackup, changes) {
  const s = changes.flat();
  return [...new Set(s.filter((c,i)=>s[i+1]>lastBackup).sort((a,b)=>a-b))];
}

module.exports = getFilesToBackup
