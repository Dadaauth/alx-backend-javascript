export default function iterateThroughObject(reportWithIterator) {
  let t_str = "";
  for (const rp of reportWithIterator) {
    t_str += rp;
    if (rp != reportWithIterator[reportWithIterator.length - 1]) t_str += " | ";
  }
  return t_str;
}
