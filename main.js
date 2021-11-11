 //Exam and score

 function noteResult() {
    var midtermScore, finalScore, message, average;
    midtermScore = Number(document.getElementById("midterm").value);
    finalScore = Number(document.getElementById("final").value);
    average = midtermScore * 0.4 + finalScore * 0.6;

    if (isNaN(midtermScore)) {
      alert("Please type a number");
    } else if (isNaN(finalScore)) {
      alert("Please type a number");
    } else {
      if (average >= 0 && average < 45) {
        message = "Failed.Result is FF";
      } else if (average >= 45 && average < 60) {
        message = "Passed Result is DD";
      } else if (average >= 60 && average < 70) {
        message = "Passed Result is CC";
      } else if (average >= 70 && average < 80) {
        message = "Passed Result is BB";
      } else if (average >= 80 && average < 90) {
        message = "Passed Result is AA";
      } else if (average >= 90 && average <= 100) {
        message = "Passed Result is Plus-AA";
      } else {
        alert(
          "The range is not correct. Please type a number between 0-100"
        );
      }
    }
    document.getElementById("examresult").innerHTML = message;
  }

  //What Day?

  function showday() {
    var day;
    var d = new Date().getDay();
    var daynumber;
    daynumber = Number(document.getElementById("daynum").value);
    switch (daynumber) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Fiday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        day = "There is no such a day";
    }
    document.getElementById("dayresult").innerHTML = day;
  }

  //Arrays-Loop

  function showlang() {
    var langs = [
      "Html",
      "Css",
      "JavaScript",
      "Asp.Net",
      "Angular Js",
      "React Js",
      "SQL",
      "Java",
      "Python",
      "Php",
      "Jquery",
      "Node Js",
      "MySql",
      "C#",
      "ColdFusion",
    ];
    var text = "",
      i;
    for (i = 0; i < langs.length; i++) {
      text += langs[i] + "<br>";
    }

    document.getElementById("langresult").innerHTML = text;
  }

  //factorial

  function dgtshow() {
    var getnum,
      i,
      factor = 1;
    getnum = Number(document.getElementById("getanumber").value);
    for (i = 1; i <= getnum; i++) {
      factor = factor * i;
    }
    document.getElementById("dgtresult").innerHTML = factor;
  }

  //typeof

  var x;
  document.getElementById("typof").innerHTML =
    "5: " +
    typeof 5 +
    "<br>" +
    "JavaScript: " +
    typeof "JavaScript" +
    "<br>" +
    "3.14: " +
    typeof 3.14 +
    "<br>" +
    "NaN:" +
    typeof NaN +
    "<br>" +
    "true:" +
    typeof true +
    "<br>" +
    "[0,10,15]: " +
    typeof "[0,10,15]" +
    "<br>" +
    "{name:'Fizzy', model:'fancy'}: " +
    typeof { name: "Fizzy", model: "fancy" } +
    "<br>" +
    "new Date(): " +
    typeof new Date() +
    "<br>" +
    "function(){}: " +
    typeof function () {} +
    "<br>" +
    "null: " +
    typeof null +
    "<br>" +
    "x variable: " +
    typeof x +
    "<br>";

  //locations

  var result;
  result = document.getElementById("locations");
  result.innerHTML =
    "window.location.href=" +
    window.location.href +
    "<br>" +
    "window.location.hostname=" +
    window.location.hostname +
    "<br>" +
    "window.location.pathname=" +
    window.location.pathname +
    "<br>" +
    "window.location.protocol=" +
    window.location.protocol +
    "<br>" +
    "window.location.port=" +
    window.location.port +
    "<br>";

     //Show-Hide

  function showHide(){
    var getElement=document.querySelector('#lamp');
    if(getElement.style.display=="none"){
      getElement.style.display="block";
    }else{
      getElement.style.display="none";
    }
  }

  //Switch Colors
  var btn, result, count=0;
  btn=document.querySelector('#btn');
  result=document.querySelector('#result');
  btn.addEventListener('click', function(){
    if(count%2===0){
      result.style.backgroundColor="red";
    }else{
      result.style.backgroundColor="green";
    }
    count++;
  });
