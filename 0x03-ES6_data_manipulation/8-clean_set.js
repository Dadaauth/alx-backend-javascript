export default function cleanSet(set, startString) {
  let filteredString = "";
  if (startString === "") return filteredString;

  for (const value of set) {
    if (value.startsWith(startString)) {
        const filteredValue = value.slice(startString.length);
        filteredString += filteredString.length > 0? `-${filteredValue}`: filteredValue;
    }
  }
  return filteredString;
}
