function binaryToDecimal(x) {
    x += ''
    let dec = 0
    for (let i = x.length - 1; i >= 0; i--) {
        dec += x[x.length - (i + 1)] * (2 ** i)
    }
    return dec
}
console.log(binaryToDecimal('11011011'));