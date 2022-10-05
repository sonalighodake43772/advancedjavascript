class student
{

    static count=0;
    constructor(name,age,phoneNo,boardofmarks)
    {
this.name=name;
this.age=age;
this.phoneNo=phoneNo;
this.boardofmarks=boardofmarks;
student.count++;//real time count
    }

  eligible() {
    if(this.boardofmarks>40)
    {
        console.log(`${this.name} is eligible`);
    }
    else
    {
        console.log(`${this.name} is not eligible`);
    }   
    }
        
    

    totalcount()
    {
        console.log("number of student created"+student.count);
    }
}
let s1=new student('lisa',20,8494499494,89);

let s2=new student('jelly',12,7774744444,50);
let s3=new student('rahul',15,888888889,35);
let s4=new student('aamir',22,88866665,40);
let s5=new student('swati',21,848488488448,58);
s1.totalcount();
s2.eligible();
s3.eligible();
s4.eligible();
s5.eligible();
