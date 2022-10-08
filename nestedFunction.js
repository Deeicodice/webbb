function A(x) {
    function B(y) {
        function C(z) {
            console.log(x * y * z)
        }
        return C(3);
    }
    return B(8);

}

console.log(A(5));

