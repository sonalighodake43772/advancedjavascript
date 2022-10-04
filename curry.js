// currying is used to transform function having multiple argument into sequence of function into single argument
// using bind method
 let multi=function(x,y)
 {
         console.log(x*y);
}
 let multiplybyTwo=multi.bind(this,); 
 multiplybyTwo(5,2);

 let multiplybythree=multi.bind(this,3);
 multiplybythree(5);


// using function closure
let add=function(x)
{
    return function(y)
    {
        console.log(x+y);
    }
}
let addition=add(7);
addition(5);

let addition2=add(90);
addition2(5);


