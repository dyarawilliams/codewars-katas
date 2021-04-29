function getCount(str){
    let vowelCount = 0;
    let vowels = 'aeiou';

    for(let i = 0; i < str.length; i++){
        if(vowels.split('').includes(str[i])){
            vowelCount++;
        }
    }
    return vowelCount;
}