//Check whether a number is Prime or not


 let num=29;
     let fac=0;
     
    for(let a=1;a<=num;a++){
        if(num%a==0){
           fac++;
        }
    }
    
  fac===2 ? console.log("Yes", num, "is Prime") : console.log("No", num, "is not Prime");
    
     
  
    //Check whether a string is palindrome or not.
    
    let str="masai";
    
    let rev="";
    
    for(let a=str.length-1;a>=0;a--){
        rev+=str[a];
    }
    
   str===rev ?console.log("Yes"): console.log("No") 
