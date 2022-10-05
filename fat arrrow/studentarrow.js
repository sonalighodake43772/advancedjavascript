class student
{
constructor(name,age,boradofmarks)
    {
this.name=name;
this.age=age;
this.boradofmarks=boradofmarks;

    }

 setage(minage)
 {
    return (mark)=>
    {
     if(this.boradofmarks>mark&&this.age>=minage)
     {
        console.log(this.name+ "is eligible for placement")

     }
     else
     {
        console.log(this.name+ "is not eligible for placement")

     }
    }


 }

}
let s1=new student('lisa',20,89);

let s2=new student('jelly',12,50);
s1.setage(20)(40);
s2.setage(20)(40);


