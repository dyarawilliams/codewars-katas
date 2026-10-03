Number.prototype.times = function (f) {
  // Use Math.floor to handle potential decimals safely
  const iterations = Math.floor(this); 
  for (let i = 0; i < iterations; i++) {
    f(i);
  }
}