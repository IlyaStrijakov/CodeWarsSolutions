www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

Reversed String


function solution(str){
    let Str = '';
    for(let i = str.length - 1; i >= 0; i--){
        Str = Str + str[i];
    } return Str;