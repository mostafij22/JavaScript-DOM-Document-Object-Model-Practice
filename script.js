

//ES6 er ager somoy k javaScript k bole Vanila ba row javaScript,
//ES6 2015 theke suru hoi

//Variable k 3 way declare kora jai
  var a = "sumit"; //function scoped
  let b = "Rabbil"; //block scoped  
  let c = "Limon"; //block scoped  



//block
  if (true) {

  }

//function block
  function a() {

  }

//var, global context sate nijeke guliye felte pare
  var b= "Bangladesh";
  function a() {
      if(true) {
          b= "sumit";
      }
  }
  console.log(b);

// var b= "Bangladesh";
  if (true) {
      if(true) {
          b= "sumit";
      }
  }
  console.log(b);

// a e problem ta solve korar jonno let,const abirvab hoyese
  let b= "Bangladesh";
  function a() {
      if(true) {
          b= "sumit";
      }
  }
  console.log(b);



//======Hoisting==========
//jokhon JavaScript execute hoi tokhon, jekono variable defination and function 2tai hoisting hoye upore uthe jai
//hoisting-upore tule deya
//var and let 2tor khetrei hoisting hoi, but let er khetre je line e define kora hoy,
//oi line e reassing hoye jai , but var er khetre ata hoi na, context onujae je jaigai asignment hoyesilo oi jaigai hoy 


  var LANGUAGE;
  var language;

  function getLanguage(){
      var language;
      if(!language){
          language =LANGUAGE;
      }
      return language;
  }

  LANGUAGE = "Java";
  language= "JavaScript";
  console.log(`I love ${getLanguage()}`);
//=====================================
  var LANGUAGE = "Java";
  var language = "JavaScript";

  function getLanguage(){
      if(!language) {
          var language = LANGUAGE;
      }
      return language;
  }
  console.log(`I love ${getLanguage()}`);
//========================
  let LANGUAGE = "Java";
  let language = "JavaScript";

  function getLanguage(){
      if(!language) {
          let language = LANGUAGE;
      }
      return language;
  }
  console.log(`I love ${getLanguage()}`);




//==========DOM(Document Object Model)==================

  console.dir(document);
  console.dir(document.all);
  for(let element of document.all){
      console.log(element);
  }



// =================DOM Traversal=========================
      //document.getElementById()
      //document.getElementByClass
      //document.getElementsByTagName()
      //document.querySelector()
      //document.querySelectorAll()

//Traversal mane vitor diye jawa, element khuje ber kora, kivabe akter por aktate jete pari akta element er parent child er modhe jawa
//HTML element k catch kora ba find kora hoi document er koyek ta method diye

//=======document.getElementById()=======
  //Id uniqe hoi, akta item return kore

  const h1Element = document.getElementById("header");

  console.log(h1Element.textContent); //textContent akta property,method noy
  h1Element.textContent = "React"; //code er vitor jevabe lekha thake sevabei output dei
  h1Element.innerText = "React"; //brower e jevabe css diye display korar kotha sevabei output dei
  h1Element.innerHTML = "React"; // tag er vitor html element jodi thake seta soho display kore 

  console.log(h1Element.textContent);
  console.log(h1Element.innerText);
  console.log(h1Element.innerHTML);


//==============JS CSS=====================
  const h1Element = document.getElementById("header");
  h1Element.style.color= "red";
  h1Element.style.fontSize="40px";


//==========document.getElementByClass==============
  //class multiple item return kore

  const items = document.getElementsByClassName("item");
  // console.log(items);
  for(let item of items) {
    item.style.color = "green";
  }

  
//==========document.getElementByTagName==============
  //tag nam dhore element find kora 

  const items = document.getElementsByTagName("h1");
  console.log(items);


  
//==========document.querySelector==============
  //jekono css selector dhore html element/tag find kore dei, 
  //querySelector always akta item return kore, document first theke nicher dike read kore, so first er tai catch kore first e 
  //class er jonno, dot(".---"), id er jonno hash("#---")  

  const element = document.querySelector(".item");
  element.style.color = "red"; 
  //=======================
  const lastChildItem = document.querySelector(".item:last-child");
  lastChildItem.style.color = "red";
  
// ==========document.querySelectorAll==============
  querySelectorAll multiple item return kore, 

  const element = document.querySelectorAll(".item");
  console.log(element);
  //=============================
  const lastChildItems = document.querySelectorAll(".item:last-child");
  for(let item of lastChildItems){
    item.style.color= "red" 
  }
  //============================
  const lastChildItems = document.querySelectorAll(".item:nth-child(1)");
  for(let item of lastChildItems){
    item.style.color= "red" 
  }

//==========Channing querySelector==============
  const items = document.querySelector("#items").querySelectorAll(".item");
  console.log(items)






//========DOM: Parent -------Child relation=============

  //child theke parent element e jawar method
    const item = document.querySelector(".item");
    console.log(item.parentElement);
    console.log(item.parentElement.children);

    const grandParent = document.querySelector(".todo-list");
    const parent = grandParent.children;
    const childTwo = parent[1];
    console.log(parent);
    console.log(childTwo);

    const element = document.querySelector(".item:nth-child(2)");
    console.log(element.closest(".tod-list"));//children to parent
    element.nextElementSibling.style.color = "blue";
    element.previousElementSibling.style.color = "red";




//=========DOM: Manipulation=============
  //element create 
  //append mane jukto kora, er vitor sob diya jai
  //but appendChild er sate obsoy html element dite hobe, na dile error dekhabe
    const divElement = document.createElement("div");
    divElement.style.fontSize = "12px";
    divElement.style.backgroundColor = "red";
    divElement.style.height = "100px";
    divElement.className = "hero";
    divElement.setAttribute("title","Red div");

    const container = document.querySelector('.todo-list');
    container.append("Hero");
    container.append(divElement, "hero", );
    container.appendChild(divElement);

    const h2Element = container.querySelector(".myClass");
    container.insertBefore(divElement, h2Element);




//=======DOM: Event ========================    
  //event mane kono akta ghotona, user event(button) er madhome, kono kisu click , hover, etc
  //madhome webapplicattion er sate interact kore, user er bivinno activity javaScript Listen kore and response kore  
  //javaScript kono event ghotese kina ta detect korte pare,ata k bola hoi event Listening kora.
  //Syntax: element.addEventListener(event, function, useCapture); {event list follow: w3school-HTML Events}
        //element.addEventListener("click", function(){ alert("Hello World!"); });

  const deleteButton = document.querySelector('.delete');
  deleteButton.addEventListener("click", function(e){
    console.log("Hello")
  });
  

  const inputElement = document.querySelector("input[type='text']");
  inputElement.addEventListener("keydown", function(e){
    console.log("Typing keyboard event");
  })

  // javaScript, event keyword ta automatic function parameter e diye dei,
  //event k sonkhepe e likha hoi, event o akta object


  //=====form event=====
    //HTML form er default beheviar hosse, kisu submit kore dile page ta reload heye jai
    //ae default beheviar ta change/off korar jonno, prevent korte hoi, a jonno a fuction asse
    //prevent function ta, event/e object er vitor thake. ata k sober age call kore rakhte hoi, tahole r submit er por page reload hobe na.
   
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Submit Successful");
    // console.log(e.target);
  });


  //event er target hosse jar upore evet ta apply hoy, target akta property.
  // .value ta input element er khetre assbe and sei input value ta dibe
  const inputElement = document.querySelector("input[type='text]");

  inputElement.addEventListener("focus", function(e){
    console.log(e.target.value);
  });

