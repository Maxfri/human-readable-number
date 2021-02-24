module.exports = function toReadable(number) {
    const num = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let result;
    let arrNumber = number.toString().split("");
    let length = arrNumber.length;
    let tennet;

    if (length === 1) {
        result = num[number];
    } else if (length === 2) {
        tennet = Number(arrNumber[0] + "0");
        result =
            tennet < 20 ? num[number] : num[tennet] + " " + num[arrNumber[1]];
        if (arrNumber[1] == 0) {
            result = num[tennet];
        }
    } else if (length === 3) {
        tennet = Number(arrNumber[1] + "0");
        twenty = Number(arrNumber[1] + arrNumber[2]);
        result =
            tennet < 20
                ? num[arrNumber[0]] + " hundred " + num[twenty]
                : arrNumber[2] != 0 && arrNumber[1] != 0
                ? num[arrNumber[0]] +
                  " hundred " +
                  num[tennet] +
                  " " +
                  num[arrNumber[2]]
                : num[arrNumber[0]] + " hundred " + num[tennet];
        if (arrNumber[2] == 0 && arrNumber[1] == 0) {
            result = num[arrNumber[0]] + " hundred";
        }
    }

    return result;
};
