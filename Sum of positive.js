Sum of positive


https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    for (var i=0, count = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            count += arr[i];
        }
    }
    return count;
}

var anArray = [1,-4,7,12]

positiveSum(anArray)