I love you, a little , a lot, passionately ... not at all


https://www.codewars.com/kata/57f24e6a18e9fad8eb000296


    function howMuchILoveYou(nbPetals) {
        switch(nbPetals % 6) {
            case 1:      return "I love you";
            case 2:      return "a little";
            case 3:      return "a lot";
            case 4:      return "passionately";
            case 5:      return "madly";
            case 0:      return "not at all";
        }
    }