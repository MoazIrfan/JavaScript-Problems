function stringPalingdram(str) {
    let len = str.length;
    for (let i = 0; i < str.length / 2; i++) {
        console.log(str)
        if (str[i] !== str[len - 1 - i]) {
            return "Your String is not Palingdram"
        }

        return "Strings are Palingdram"
    }

}


const string = "racecarq"
console.log(stringPalingdram(string))