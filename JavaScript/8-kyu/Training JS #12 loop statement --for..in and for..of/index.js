function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    //     console.log(`Length of the key ${key.length}`)
    //     console.log(`Length of the value ${obj[key].length}`)
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}
