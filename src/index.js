module.exports = function toReadable(num) {
    const oneToNine = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tenToNinety = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const elevenToNineteen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (num === 0) {
        // console.log(num);
        return "zero";
    }

    if (1 <= num && num <= 9) {
        // console.log('(1 <= num <= 9)');
        return oneToNine[num];
    }

    if (10 <= num && num < 20) {
        // console.log('(10 <= num < 20)');
        return elevenToNineteen[num - 10];
    }

    if (20 <= num && num <= 99) {
        // console.log('(20 <= num <= 99)');
        return num % 10 === 0
            ? tenToNinety[Math.floor(num / 10)]
            : tenToNinety[Math.floor(num / 10)] + " " + oneToNine[num % 10];
    }

    if (100 <= num && num <= 999) {
        // console.log('(100 <= num <= 999)');
        let hundred = oneToNine[Math.floor(num / 100)] + " hundred";
        let dec = num % 100;
        let wholePlusDec =
            tenToNinety[Math.floor(dec / 10)] + " " + oneToNine[dec % 10];
        if (num % 100 === 0) {
            return hundred;
        } else if (num % 100 != 0 && 10 <= dec && dec < 20) {
            return hundred + " " + elevenToNineteen[dec - 10];
        } else {
            return hundred + " " + wholePlusDec;
        }
    }
};
