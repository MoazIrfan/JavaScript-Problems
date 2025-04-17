function twoBit(num) {
    let nu = num.split("0").toString(2)
    return nu
}

const num = "100010010001";
console.log(twoBit(num))