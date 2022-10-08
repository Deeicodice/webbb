let x = [29,null,'test','value','','NaN',75,undefined,false];{
let y = [null,'','NaN',undefined,false];

x = x.filter(item => y.indexOf(item) === -1);
}


let z = ['hey','hi','test','testing'];{
let a = ['hey','hi','testing'];
z = z.filter(item => a.indexOf(item) === -1);
}


console.log(x);
console.log(z);

