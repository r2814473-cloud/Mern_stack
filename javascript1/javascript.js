 var age=20;
        age = 30; //re-initialization of variable
        console.log(age);
  function employee(empname,empdept,empclg="mit"){
        console.log("Employee Name: " + empname + ", Department: " + empdept + ", College: " + empclg);
     }
     employee("John", "IT", "MIT");
     employee("Alice", "HR");
     employee("Bob", "Finance");

     let data1= function(){
      return "hello javascript";
      // return "hello javascript"; only one return statement is allowed in a function
     }

     console.log(data1());

     let emp = function(empname,empdept,empclg="mit"){
      return "Employee Name: " + empname + ", Department: " + empdept + ", College: " + empclg;
     }

     console.log(emp("John", "IT", "MIT"));

     //-----Arrow Function-----
     let mul = () => {
      return "hello javascript";
     }
     console.log(mul());

     let data2=(a,b)=>{
      return a*b;
     }
     console.log(data2(2,3));

   console.log("saran");
 
   //callback function
   //in function passing the another function as an argument is called callback function

   function sece(callback){
      console.log("welcome to sece");
      callback();
   }

   function stud(){
      console.log("display students");
   }

   sece(stud);

   function whatsapp(callback){
      console.log("welcome to whatsapp");
      callback();
   }
   function notification(){
      console.log("display notification");
   }

   whatsapp(notification);

   //promise
   let fetch_api=new Promise((resolve,reject)=>{
      let api=true;
      if(api){
         resolve("fetched api data");
      }else{
            reject("api data not fetched");
      }
      });     
   console.log(fetch_api);
   fetch_api.then(data=> console.log(data));


   let delivery=new Promise((resolve,reject)=>{
      let order=true;
      if(order){
         resolve("order delivered");      
      }else{
            setTimeout(()=>{
         reject("order not delivered");
      },2000)


      }});
      console.log(delivery);
      delivery.then(data=> console.log(data));
   