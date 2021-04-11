function findShort(s){
    console.log(s)
    let str = s.split(' ').map(word => word.length)
    console.log(str)
    let sorted = str.sort((a,b) => a - b);
    console.log(sorted)
    return sorted[0];
}