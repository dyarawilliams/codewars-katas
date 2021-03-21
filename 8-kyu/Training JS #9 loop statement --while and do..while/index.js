function padIt(str, n) {
  let result = str;
  let i = 0;

  do {
    i = i + 1;
    if (i % 2 === 0) {
      result = result + "*";
    } else {
      result = "*" + result;
    }
  } while (i < n);

  return result;
}
