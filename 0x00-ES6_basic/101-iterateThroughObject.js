export default function iterateThroughObject(reportWithIterator) {
  let tStr = '';
  for (const rp of reportWithIterator) {
    tStr += rp;
    if (rp !== reportWithIterator[reportWithIterator.length - 1]) tStr += ' | ';
  }
  return tStr;
}
