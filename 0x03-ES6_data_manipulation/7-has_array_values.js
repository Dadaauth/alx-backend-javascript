export default function hasValuesFromArray(set, arr) {
  let do_exist = true;
  arr.map((val) => {
    if (!set.has(val)) {
      do_exist = false;
    }
  });
  return do_exist;
}
