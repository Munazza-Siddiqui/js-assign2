//---------chap 21------
//string methods


//task 1
// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var  fullName= firstname+lastname;
// alert("welcome "+fullName+" !");

//tast 2
// var a=prompt("enter your favourite mobile phone model.");
// var l=a.length;
// document.write("My favourite phone is: "+a);
// document.write("<br>Length of string: "+l);

//task 3
//  var arr="pakistani";
// document.write("String: "+arr);
// var i=arr.indexOf('n');
// document.write("<br>Index of 'n': "+i);


//task 4
// var arr="Hello World";
// document.write("String: "+arr);
// var ask="l";
// for (var i=arr.length-1; i>=0; i--){
//  if(arr[i]==ask){
//         document.write("<br>Last Index of '"+ask+"': "+i);
//         break;
//     }
// }

// task 5
// var arr="Pakistani";
// document.write("String: "+arr);
// var a=arr.charAt(3);
// document.write("<br>Character at index 3: "+a);

//task 6
// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var  fullName= firstname.concat(lastname);
// alert("welcome "+fullName+" !");

//task 7
// var city="Hyderabad";
// document.write("City: "+city);
// var res = city.replace("Hydera", "Islama");
// document.write("<br>After replacement: "+res);

//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message);
// var res = message.replace(/and/g, "&");
// document.write("<br>After replacement: "+res);

//task 9
// var str="472";
// var num=Number(str);
// document.write("Value: "+str);
// document.write("<br>Type: "+typeof str);
// document.write("<br>Value: "+num);
// document.write("<br>Type: "+typeof num);

//task 10
// var a=prompt("enter data");
// var b = a.toUpperCase();
// document.write("User input: "+a);
// document.write("<br>Upper case: "+b);

//task 11                          
// var a=prompt("enter data");
// var b = a.slice(1).toLowerCase();
// c=a.charAt(0).toUpperCase();
// var d =c+b;
// document.write("User input: "+a);
// document.write("<br>Title case: "+d);



//task 12                                  
// var num = 35.36 ;
// document.write("Number: "+num+"<br>Result: ");
// var str=num.toString();
// for(var i=0; i<str.length; i++){
//     if(str[i]=='.'){
//         i++;
//     }
//         document.write(str[i]);
// }



//task 13                                 
// var c=prompt("enter username");
// for(var i=0; i<c.length; i++)
// {var a= c.charCodeAt(i);
//     if(a=='33' || a=='44' || a=='46' || a=='64')
//     {
//         alert("please enter a valid user name!");
//     }
// }

//task 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var c=b.toLowerCase();
// var flag=0;
// for(var i=0; i<a.length; i++){
//     if(c==a[i]){
//         flag=1;
//         alert(b+" is available at index "+i+" in our bakery.");
//     }
// }
// if(flag==0){
// alert("We are sorry. "+b+" is not available in our bakery.");}


//task 15                                           ********
// var pass = prompt("enter your password!");
// document.write("Entered Password: " + pass);
// if (pass.length >= '6') {
//     if (pass.charAt(0) >= '48' && pass.charAt(0) <= '57') {
//         alert("Password can not be begin with a number!<br>Please enter a valid password!");
//     }
//     else {
//         for (var i = 0; i < pass.length; i++) {
//             if ((pass.charAt(i) >= '48' && pass.charAt(i) <= '57') || (pass.charAt(i) >= '65' && pass.charAt(i) <= '90') || (pass.charAt(i) >= '97' && pass.charAt(i) <= '122')) {
//             }
//             else {
//                 alert("Enter fdfvalid password!");
//                 break;
//             }
//         }
//     }
//     alert("SUCCESSFUL!");
// }
// else {
//     alert("Enter valid password!");
// }


//task 16
// var university = "University of Karachi";
// var s=university.split("");
// for(var i=0; i<university.length; i++)
// {
//     document.write(s[i]+"<br>");
//  }
 

//task 17
// var a=prompt("enter something!");
// document.write("User input: "+a+"<br>");
// var len=a.length;
// document.write("Last character of input: "+a[len-1]);

//task 18                                        *******
// var a="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+a);
// var count=0;
// var b= a.toLowerCase();
// for (var i=0; i<b.length; i++){
//     if(b.slice(i,3)=="the")
//    { count++;}

// }
// document.write("<br>There are "+count+" occurrence(s) of word 'the'.");