// 1.write a program to print 10 numbers 
// using for loop and write same program suing while and do-while loop?
 for ( var i=1;i<=10;i++){
    console.log("using for loop",i);
}
let j=1;
while(j<=10){
    console.log("using while loop",j);
    j++
    
}
k=1
do{
    console.log( "using do while",k);
    k++;
}while(k<=10);


// 2.write a program to print even numbers using for loop and 
// write same program suing while and do-while loop?
for(a=1;a<=10;a++){
    if(a%2==0){
        console.log("even number",a)
    }
}

let b=1;
while(b<=10){
    if(b%2==0){
        console.log("even number2",b)
    }
    b++
}

let c=1;
do{
    if(c%2==0){
        console.log("even number3",c)
    }
    c++;

}while(c<=10);


// 3.write a program to print odd numbers using for loop and 
// write same program suing while and do-while loop?

for(d=1;d<=10;d++){
    if(d%2!=0){
        console.log("odd numbers",d);
     }
}
let e=1;
while(e<=10){
    if(e%2!=0){
        console.log("odd number2",e)
    }
    e++
}
let f=1;
do{
    if(f%2!==0){
        console.log("odd number3",f)
    }
    f++;

}while(f<=10);


// 4.write a program to console the marks grade D using conditional statements and 
// the marks for D grade is b/w the 35 and 45 ?
let marks=40;
if(marks>=35 && marks<=40){
    console.log("grade D");
}