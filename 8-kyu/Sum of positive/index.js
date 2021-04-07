function positiveSum(arr) {
    let sum = 0
    for(let key in arr){
      if(arr[key] > 0){
        sum += arr[key]
      }
    }
    return sum
}