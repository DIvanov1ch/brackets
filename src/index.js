module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig
    .reduce((array, value) => array
      .concat(value.join('')), []);
  for (let i = 0; i < brackets.length; i++) {
    let currentValue = brackets[i];
    while (str.includes(currentValue)) {
      str = str.replace(currentValue, '');
      i = -1;
    }
  }
  return str.length == 0;
}
