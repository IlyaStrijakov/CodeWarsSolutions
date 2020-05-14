Beginner Series #2 Clock

https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

    function past(h, m, s){
        let past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
        return past(h, m, s)
    }