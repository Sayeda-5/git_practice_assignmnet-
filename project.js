//Check whether a number is Prime or not


 let num=29;
     let count=0;
     
    for(let a=1;a<=num;a++){
        if(num%a==0){
           count++;
        }
    }
    
  count===2 ? console.log("Yes", num, "is Prime") : console.log("No", num, "is not Prime");
    
     
  
    //Check whether a string is palindrome or not.
    
    let str="madam";
    
    let bag="";
    
    for(let a=str.length-1;a>=0;a--){
        bag+=str[a];
    }
    
   str===rev ?console.log("Yes it is a Palindrome"): console.log("No it is a Palindrome") 
