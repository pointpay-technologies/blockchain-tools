export class CreateUtils extends Utils {
  flattenNestedCryptoArrays(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  getCryptos(arr, short) {
    return arr.map(item => item.short===short);
  }
  const rightAnswers = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);
  checkStr(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
      case '{':
      case '[':
        arr.push(str[i]);
        break;
      case '}':
        if (arr.length === 0 || arr[arr.length - 1] !== '{') {
          return console.log(str.length);
        } else {
          arr.pop();
        }
        break;
      case ']':
        if (arr.length === 0 || arr[arr.length - 1] !== '[') {
          return str.length;
        } else {
          arr.pop();
        }
        break;
      case ')':
        if (arr.length === 0 || arr[arr.length - 1] !== '(') {
          return str.length;
        } else {
          arr.pop();
        }
        break;
    }
  }
  return arr.length === 0 ? console.log('Success') : console.log('error occured: ', str.length);
  }
}

