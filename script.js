//!   Task :1 Annoymous function:

//* Syntax:

//!     function ()
//!     {
//!       block of code:
//!     }

//*  odd number using annoymous function:



/*
var oddarray=[];
var anfunction=function(number)
{
    for(var i=0;i<number.length;i++)
    {
        if(number[i]%2!==0)
        {
            oddarray.push(number[i]);
        }
    }
    return oddarray;
}
console.log(anfunction([1,2,3,4,5]));
*/

//* Convert all the strings to title caps in a string array using annoymous function



/*

var totitlecase=function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
}
totitlecase(["dadA","tOm"]);

*/

//* Sum of all numbers in an array using annoymous function
/*
var sumofnumber=0;
var addfunction=function(number)
{
    for(var i=0;i<number.length;i++)
    {
        sumofnumber=number[i]+sumofnumber;
    }
    return sumofnumber;
}
console.log("Sum of the given array is :",addfunction([10,4,6,25,5]));
*/

//* Prime numbers in array using annoymous function
/*
var isprime=true;
var result=function (number)
{
    for(var index=0;index<number.length;index++)
    {
        if(number[index]<1)
        {
            console.log("not a prime number");
        }
        else{
            for(var i=2;i<number[index];i++)
            {
                if(number[index]%i===0)
                {
                    isprime=false;
                    break;
                }
                else{
                    isprime=true;
                }
            }
            if(isprime==true)
            {
                console.log(number[index] ,"is prime")
            }
            else{
                console.log(number[index] ,"is not prime:")
            }
    }
    }
}
result([1,2,3,4,6,8,9,10,18,19,23,5,7]);
*/
//* palindrome using annoymous function
/*
var Arrayofstring=function(originalarray)
{
    var reversearry;
    for(var i=0;i<originalarray.length;i++)
    {
    
        b=(String(originalarray[i]).split('').reverse().join('')); 
        if(originalarray[i]===b)
        {
            console.log(originalarray[i],"palindrome");
        }
        else{
            console.log(originalarray[i],"not a palindrome")
        }
    }
}
Arrayofstring(["dad","tom","mom"]);
*/
//* Median of two sorted arrays using annoymous function:
/*
var median=function(array1,array2)
{
    var medianarray=array1.concat(array2);
    var sortedmedianarray=medianarray.sort();
    var len=Math.floor(sortedmedianarray.length/2);
    if(sortedmedianarray.length%2!=0)
    {
        console.log("median of the array:",sortedmedianarray[len]);
    }
    else{
        
        var med=((sortedmedianarray[len]+sortedmedianarray[len+1])/2);
        console.log(Math.round(med));
    }
}
//median([1,322,3,56,7],[2,3,45,6,8]);
median([1,2,3,4,5],[5,7,8,9,10]);
*/


//* Remove duplicates from an array using annoymous function
/*
var array=[];
var nonduplicatearray=function(arr)
{
    array=new Set(arr)
    return array;
}
nonduplicatearray([1,2,3,1,3,5,2,1,2,1,7,7])
console.log(array);
*/

//* Rotate an array by k times using annoymous function

/*
var rotaedarray=function(arr,k)
{
    for(var i=0;i<k;i++)
{
    var temp=arr.shift(arr[i]);
    arr.push(temp);
}
return arr;
}
console.log(rotaedarray([1,2,3,4,5,7,8,9,10],2));
*/




//! IIFE function :

//* Syntax:

//!     (function()
//!     {
//!         block of code:
//!     }();

//* odd number:
/*
var oddarray=[];
(function (number)
{
    for(var i=0;i<number.length;i++)
    {
        if(number[i]%2!==0)
        {
            oddarray.push(number[i]);
        }
    }
    console.log(oddarray);
})([1,2,3,4,5]);
*/

//* Convert all the strings to title caps in a string array

/*
(function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
})(["dadA","tOm"]);
*/


//* Sum of all numbers in an array
/*
var sumofnumber=0;
(function(number)
{
    for(var i=0;i<number.length;i++)
    {
        sumofnumber=number[i]+sumofnumber;
    }
    console.log(sumofnumber);
})
([10,4,6,25,5]);
*/

//* Prime numbers in array
/*
var isprime=true;
(function (number)
{
    for(var index=0;index<number.length;index++)
    {
        if(number[index]<1)
        {
            console.log("not a prime number");
        }
        else{
            for(var i=2;i<number[index];i++)
            {
                if(number[index]%i===0)
                {
                    isprime=false;
                    break;
                }
                else{
                    isprime=true;
                }
            }
            if(isprime==true)
            {
                console.log(number[index] ,"is prime")
            }
            else{
                console.log(number[index] ,"is not prime:")
            }
    }
    }
})(([1,2,3,4,6,8,9,10,18,19,23,5,7]));
*/

//* palindrome :
/*
(function(originalarray)
{
    var reversearry;
    for(var i=0;i<originalarray.length;i++)
    {
    
        b=(String(originalarray[i]).split('').reverse().join('')); 
        if(originalarray[i]===b)
        {
            console.log(originalarray[i],"palindrome");
        }
        else{
            console.log(originalarray[i],"not a palindrome")
        }
    }
})(["dad","tom","mom"]);
*/

//* Median of the two sorted arrays:
/*
(function(array1,array2)
{
    var medianarray=array1.concat(array2);
    var sortedmedianarray=medianarray.sort();
    var len=Math.floor(sortedmedianarray.length/2);
    if(sortedmedianarray.length%2!=0)
    {
        console.log("median of the array:",sortedmedianarray[len]);
    }
    else{
        
        var med=((sortedmedianarray[len]+sortedmedianarray[len+1])/2);
        console.log(Math.round(med));
    }
})
([1,2,3,4,5],[5,7,8,9,10]);
*/

//* Remove duplicates from an array
/*
var array=[];
(function(arr)
{
    array=new Set(arr)
    return array;
})([1,2,3,1,3,5,2,1,2,1,7,7])
console.log(array);
*/

//* Rotate an array  K times:

/*
(function(arr,k)
{
    for(var i=0;i<k;i++)
{
    var temp=arr.shift(arr[i]);
    arr.push(temp);
}
    console.log(arr); 
})
([1,2,3,4,5,7,8,9,10],2);
*/



//! Task 2: Arrow function:

//* Syntax:

//!        ()=>
//!        {
//!         Block of code:
//!        }

//* odd number:
/*
var oddarray=[];
var anfunction=(number)=>
{
    for(var i=0;i<number.length;i++)
    {
        if(number[i]%2!==0)
        {
            oddarray.push(number[i]);
        }
    }
    return oddarray;
}
console.log(anfunction([1,2,3,4,5]));
*/

//* Convert all the strings to title caps in a string array

/*
var totitlecase= (arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
}
totitlecase(["dadA","tOm"]);
*/


//* Sum of all numbers in an array
/*
var sumofnumber=0;
var addfunction=(number)=>
{
    for(var i=0;i<number.length;i++)
    {
        sumofnumber=number[i]+sumofnumber;
    }
    return sumofnumber;
}
console.log("Sum of the given array is :",addfunction([10,4,6,25,5]));
*/

//* Prime numbers in array
/*
var isprime=true;
var result= (number)=>
{
    for(var index=0;index<number.length;index++)
    {
        if(number[index]<1)
        {
            console.log("not a prime number");
        }
        else{
            for(var i=2;i<number[index];i++)
            {
                if(number[index]%i===0)
                {
                    isprime=false;
                    break;
                }
                else{
                    isprime=true;
                }
            }
            if(isprime==true)
            {
                console.log(number[index] ,"is prime")
            }
            else{
                console.log(number[index] ,"is not prime:")
            }
    }
    }
}
result([1,2,3,4,6,8,9,10,18,19,23,5,7]);
*/

//* palindrome :
/*
var Arrayofstring=(originalarray)=>
{
    var reversearry;
    for(var i=0;i<originalarray.length;i++)
    {
    
        b=(String(originalarray[i]).split('').reverse().join('')); 
        if(originalarray[i]===b)
        {
            console.log(originalarray[i],"palindrome");
        }
        else{
            console.log(originalarray[i],"not a palindrome")
        }
    }
}
Arrayofstring(["dad","tom","mom"]);
*/



