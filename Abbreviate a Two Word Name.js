

www.codewars.com/kata/57eadb7ecd143f4c9c0000a3


Abbreviate a Two Word Name


function abbrevName(name){
    let nam = name.split(' ');
    return (nam[0][0]+'.' + nam[1][0]).toUpperCase();
}