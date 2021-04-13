function removeChar(str){
    str = str.split(''); // divides string into an ordered list
    let removeFirst = str.shift();
    let removeLast = str.pop();
    return str.join('');
}

// OR 

// function removeChar(str){
//     return str.slice(1, -1)
// }