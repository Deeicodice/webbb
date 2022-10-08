const number = (n) => {

    let sum = 0;

   if(n < 0){

   console.log(0)

   }

   for(let i = 1; i < n; i++){





    if(i % 4 === 0 || i % 5 ===0)

    sum = sum + i

   }

   console.log(sum)



}

number(8)