export class CreateUtils extends Utils {
  flattenNestedCryptoArrays(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
}
