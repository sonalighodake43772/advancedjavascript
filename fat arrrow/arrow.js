let x=(value)=>
{
    console.log(value);
}
x(9);


// this with arrow function
// in arrow function this refe to its parent scope
 
// rregular function this points to glbal object
/*function p()
{
    this.val=1;
    setTimeout(function(){
        this.val++;
        console.log(this.val);

        
    },1000);

}
p();*/

// using fat arrow points to parent scope
function p()
{
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);

        
    },1000);

}
p();


// argument binding
let t=(...n)=>
{
    // console.log(argument[0]);//give error
    console.log(n)//resolve
}
t(1,2,3);