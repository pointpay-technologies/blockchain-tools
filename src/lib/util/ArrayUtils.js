export class CreateUtils extends Utils {
  flattenNestedCryptoArrays(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  getCryptos(arr, short) {
    return arr.map(item => item.short===short);
  }
}

