function gcd (a, b, c, d) {
    if ((typeof a !== 'number') || (typeof b !== 'number'))
    return false;
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        d = c;
        c = b;
        b = a % b;
        a = c;
    
    }
    console.log(a) 
}
gcd(15, 12)
gcd(20, 19)
gcd(15, 20)
gcd(15, 20, 10, 1)