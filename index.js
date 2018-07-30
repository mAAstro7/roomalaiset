const romanNumberValues = require('./Values.js');

const romanNumberTranslator = new romanNumberValues();


    //function that returns number from string which contains roman number
    function translateRomanNumber(str) {
        const strlenght = str.length;

        let translation = 0;
        let previousNumber = 0;
        let currentNumber;

        for (let i = 0; i<strlenght;i++) {
            currentNumber = romanNumberTranslator.translate(str[i]);
            if (currentNumber === 0) {
                return "ei validi syöte";
            }
            
            if (currentNumber <= previousNumber) {
                translation += currentNumber;
            } else {
                translation -= previousNumber*2
                translation += currentNumber;
            }
            
            previousNumber = currentNumber;

        }

        return translation;   

    }


    function run () {

        console.log("Syötä roomalaisia numeroita ja saat palautuksena numeron kymmenjärjestelmästä")
        let stdin = process.openStdin();
        stdin.addListener("data", function(romanNumber) {
        let translated = translateRomanNumber(romanNumber.toString().trim());
        console.log("Syötit roomalaisen numeron " + 
            romanNumber.toString().trim() + " ja se on käännettynä: " + translated);
        console.log("Halutessasi syötä uusi roomalainen numero");
    });
        
    }


run();





