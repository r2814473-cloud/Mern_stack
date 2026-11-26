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

      // ===Objects===
      //key can be string or number
      //key should be unique
      //value can be any data type
      //object is a collection of key value pairs
      //object is a non-primitive data type
      //object is a reference data type
      //object is a mutable data type
      //object is a non-iterable data type
      //object is a non-indexed data type
      //object is a non-ordered data type
      //value can be duplicate but key should be unique
      let emp2={
         emp_id:100,
         emp_name:"sachin",
         salary:40000
      }
    
      console.log(emp2);
      //Dot notation
      console.log(emp2.emp_id);
      console.log(emp2.emp_name);
      console.log(emp2.salary);
      //square bracket notation
      console.log(emp2["emp_id"]);
      console.log(emp2["emp_name"]);
      console.log(emp2["salary"]);

      //array of objects
      let emp3=[
         {emp_id:101, emp_name:"rahul", salary:50000},
         {emp_id:102, emp_name:"rohit", salary:60000},
         {emp_id:103, emp_name:"virat", salary:70000}

      ]

      console.log(emp3);
      console.log(emp3[0]);
      console.log(emp3[0].emp_id);
      console.log(emp3[0].emp_name);
      console.log(emp3[0].salary);
      console.log(emp3[1]);
      console.log(emp3[1].emp_id);
      console.log(emp3[1].emp_name);
      console.log(emp3[1].salary);
      console.log(emp3[2]);


      let emp4=[
         {emp_id:104, emp_name:"suresh", salary:80000,skills:["java","python","javascript"]},
         {emp_id:105, emp_name:"ramesh", salary:90000,// nested object
          company:{c1:"TCS",c2:"Wipro",c3:"Infosys"}},
      ]

      //i need to access the skills of suresh
      console.log(emp4[0].skills);
      console.log(emp4[0].skills[0]);
      console.log(emp4[0].skills[1]);
      console.log(emp4[0].skills[2]);
      //i need to access the company of ramesh
      console.log(emp4[1].company);
      console.log(emp4[1].company.c1);
      console.log(emp4[1].company.c2);
      console.log(emp4[1].company.c3);
      //i need to access the company of ramesh using square bracket notation
      console.log(emp4[1]["company"]);
      console.log(emp4[1]["company"]["c1"]);
      console.log(emp4[1]["company"]["c2"]);
      console.log(emp4[1]["company"]["c3"]);
      
      //convert object into string using JSON.stringify()
      let emp5={emp_id:106, emp_name:"sachin", salary:100000};
      let emp5_string=JSON.stringify(emp5);
      console.log(emp5_string);
      console.log(typeof emp5_string);

      //convert string into object using JSON.parse()
      let emp5_object=JSON.parse(emp5_string);
      console.log(emp5_object);
      console.log(typeof emp5_object);

      //what is json in javascript
      //JSON stands for JavaScript Object Notation
      //JSON is a lightweight data interchange format

     //how to update the salary in object without modifying the original object
     let copied_data=emp5;
     console.log("Original data:", emp5);
     console.log("Copied data:", copied_data);
     copied_data.salary=120000;// it also update the original object because both are pointing to the same memory location
     console.log("Original data after update:", emp5);
     console.log("Copied data after update:", copied_data);

     //shallow copy(spread operator)--update the salary in object without modifying the original object
       let copied_data2={...emp5}; // it will create a new object and copy the values of the original object into the new object
       console.log("Original data:", emp5);
       console.log("Copied data:", copied_data2);
       copied_data2.salary=130000;
         console.log("Original data after update:", emp5);
         console.log("Copied data after update:", copied_data2);

         //what is shallow copy
         //shallow copy creates a new object but does not create copies of nested objects
         //shallow copy only copies the reference of nested objects
         //why it is called shallow copy because it only copies the first level of the object and not the nested objects
         //why it is spread operator because it spreads the values of the original object into the new object
         

         //deep copy
         let emp6={emp_id:107, emp_name:"sachin", salary:140000, company:{c1:"TCS",c2:"Wipro",c3:"Infosys"}};
         let copied_data3={...emp6};
         console.log("Original data:", emp6);
         console.log("Copied data:", copied_data3);
         copied_data3.salary=150000;
         copied_data3.company.c1="Google";
         console.log("Original data after update:", emp6);
         console.log("Copied data after update:", copied_data3);
         //whenever we update the nested object in the copied object it will also update the original object because both are pointing to the same memory location of the nested object
         //to avoid this we can use deep copy
         //deep copy creates a new object and also creates copies of nested objects
         //deep copy can be done using JSON.parse() and JSON.stringify()
         let emp7={emp_id:108, emp_name:"sachin", salary:150000, company:{c1:"TCS",c2:"Wipro",c3:"Infosys"}};
         let copied_data4=JSON.parse(JSON.stringify(emp7));
         console.log("Original data:", emp7);
         console.log("Copied data:", copied_data4);
         copied_data4.salary=160000;
         copied_data4.company.c1="Microsoft";
         console.log("Original data after update:", emp7);
         console.log("Copied data after update:", copied_data4);
         
         //json.parse(json.stringify()) what it will do
         //json.stringify() will convert the object into string and json.parse() will convert the string into object
         //so it will create a new object and also create copies of nested objects
         //so it will not update the original object when we update the copied object
         //so it will create a deep copy of the object

         let emp8={emp_id:108, emp_name:"sachin", salary:150000, company:{c1:"TCS",cdata:{
            h:100,i:200,j:300
         },c3:"Infosys"}};
         let copied_data5=JSON.parse(JSON.stringify(emp8));
         console.log("Original data:", emp8);
         console.log("Copied data:", copied_data5);
         copied_data5.salary=160000;
         copied_data5.company.cdata.h=101;
         console.log("Original data after update:", emp8);
         console.log("Copied data after update:", copied_data5);
         

         //done deep copy using lodash library
         //lodash library is a javascript library which provides utility functions for common programming tasks
         //lodash library can be used to create deep copy of an object

         let emp9={emp_id:109, emp_name:"sachin", salary:170000, company:{c1:"TCS",c2:"Wipro",c3:"Infosys"}};
         let copied_data6=_.cloneDeep(emp9);
         console.log("Original data:", emp9);
         console.log("Copied data:", copied_data6);
         copied_data6.salary=180000;
         copied_data6.company.c1="Amazon";
         console.log("Original data after update:", emp9);
         console.log("Copied data after update:", copied_data6);

         //done deep copy using structuredClone() method
         //structuredClone() method is a built-in method in javascript which can be used to create deep copy of an object
         let emp10={emp_id:110, emp_name:"sachin", salary:190000, company:{c1:"TCS",c2:"Wipro",c3:"Infosys"}};
         let copied_data7=structuredClone(emp10);
         console.log("Original data:", emp10);
         console.log("Copied data:", copied_data7);   
         copied_data7.salary=200000;
         copied_data7.company.c1="Facebook";
         console.log("Original data after update:", emp10);
         console.log("Copied data after update:", copied_data7);



    //difference between deep copy and structuredClone() method and lodash library
    //deep copy using JSON.parse() and JSON.stringify() method can only be used for simple objects and not for complex objects like functions, dates, regex, etc.
    //structuredClone() method can be used for complex objects like functions, dates, regex, etc.
    //lodash library can be used for complex objects like functions, dates, regex, etc.
    //structuredClone() method is faster than lodash library because it is a built-in method in javascript and does not require any external library
    //lodash library is slower than structuredClone() method because it is an external library and requires additional time to load the library
    //structuredClone() method is faster than deep copy using JSON.parse() and JSON.stringify() method because it does not require any additional time to convert the object into string and then convert the string into object
    //structuredClone() method is faster than deep copy using JSON.parse() and JSON.stringify() method because it does not require any additional time to convert the object into string and then convert the string into object
    //structuredClone() method is faster than deep copy using JSON.parse() and JSON.stringify() method because it does not require any additional time to convert the object into string and then convert the string into object
    
    // what is react js
    // React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.
   
    // what is node js
    // Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server-side and client-side scripts.
    
    //node js is library for javascript which is used to run javascript code outside the browser
    //node js is used to build server side applications
    //node js is used to build backend applications
    //node js is used to build command line tools
    //node js is used to build desktop applications
    //node js is used to build mobile applications

    //then what is react js
      //react js is a library for javascript which is used to build user interfaces
      //react js is used to build frontend applications
      //react js is used to build single page applications
      //react js is used to build mobile applications
      //react js is used to build desktop applications
      //react js is used to build progressive web applications
      //react js is used to build server side applications
      //react js is used to build static websites
      //react js is used to build dynamic websites
      //react js is used to build web applications
      //react js is used to build web components
      

      // react js is for frontend development and node js is for backened development
      
      

      // this keyword refers to the current object
      //super keyword is a reference variable used inside a subclass to refer directly to its immediate parent class (superclass).
      //dom-document object model
      //real dom- refresh particular component instead refreshing the entire page