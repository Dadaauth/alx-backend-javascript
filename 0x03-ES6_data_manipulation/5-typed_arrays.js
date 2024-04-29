export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const uint8 = new Uint8Array(buffer);
  try {
    uint8[position] = value;
  } catch(e) {
    throw new Error('Position outside range');
  }
  const dataView = new DataView(buffer);
  return dataView;
}
