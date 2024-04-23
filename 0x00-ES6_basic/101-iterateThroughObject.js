export default function iterateThroughObject(reportWithIterator) {
  let t_Str = '';
  for (const rp of reportWithIterator) {
    t_Str += rp;
    if (rp !== reportWithIterator[reportWithIterator.length - 1]) t_Str += ' | ';
  }
  return t_Str;
}
