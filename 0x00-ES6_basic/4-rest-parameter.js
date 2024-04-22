export default function returnHowManyArguments(...args) {
  let count = 0;
  for (arg in args) count++;
  return count;
}