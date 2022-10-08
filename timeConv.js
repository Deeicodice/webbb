const findMillsec = (h, m, s) => {
    console.log(h, m, s)
    let millsec = (h * 60 * 60 + m * 60 +s) * 1000
    console.log(millsec)

}
findMillsec(1, 20, 30)