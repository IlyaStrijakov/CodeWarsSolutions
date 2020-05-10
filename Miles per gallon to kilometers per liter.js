Miles per gallon to kilometers per liter




https://www.codewars.com/kata/557b5e0bddf29d861400005d



    function converter (mpg) {
        let kpg = mpg * 1.609344;
        let kpl = (kpg / 4.54609188).toFixed(2);
        return +(kpl)
    }