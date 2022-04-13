function clock(){
   var hours = document.getElementById("hr");
   var minutes = document.getElementById("min");
   var seconds = document.getElementById("sec");
   var am = document.getElementById("am");

   var time = new Date();
   var hrs  = time.getHours();
   var mins = time.getMinutes();
   var secs = time.getSeconds();
   var am_pm = "AM";

   if (hrs == 0) {
       hrs = 12;
   }
   if (hrs > 12) {
       hrs = hrs - 12;
       am_pm = "PM";
   }
   if (hrs < 10) {
       hrs = "0" + hrs;
   }
   if (mins < 10) {
       mins = "0" + mins;
   }
   if (secs < 10) {
       secs = "0" + secs;
   }
   hours.innerText   = hrs;
   minutes.innerText = mins;
   seconds.innerText = secs;
   am.innerText = am_pm;
}
clock();
setInterval(clock, 1000);


function set(){

   var x=  document.getElementById("select1").value;
   var y = document.getElementById("select2").value;
   var z = document.getElementById("select3").value;
   var a = document.getElementById("select4").value;
   var hour = new Date().getHours();

   if(x==hour){

       document.getElementById("box5").style.backgroundImage="url(./pic.png)";
       document.getElementById("grab").innerText='Wake Up brooo...!!';
       document.getElementById("box6").innerText="Good Morning.. have a nice day..!!";
   }

   if(y==hour){
       document.getElementById("box5").style.backgroundImage="url(./lunch2.png)";
       document.getElementById("grab").innerText="GOOD AFTER NOON";
       document.getElementById("box6").innerText="let's have some lunch..!!"
   }

   if(z==hour){
       document.getElementById("box5").style.backgroundImage="url(./nap2.svg)"
       document.getElementById("grab").innerText="Good Evening..$$$$";
       document.getElementById("box6").innerText="go & play games";
   }    
   if(a==hour){
       document.getElementById("box5").style.backgroundImage="url(./night2.svg)"
       document.getElementById("grab").innerText="Good night...!!!";
       document.getElementById("box6").innerText="NIGHT MARES...:-)";
   }    
   getOption();
}
function getOption() {


   var e = document.getElementById("select1");
   var text1 = e.options[e.selectedIndex].text;
   
   var f = document.getElementById("select2");
   var text2 = f.options[f.selectedIndex].text;
   
   var g = document.getElementById("select3");
     var text3 = g.options[g.selectedIndex].text;

     var h = document.getElementById("select4");
     var text4 = h.options[h.selectedIndex].text;
   
   
        var idExist = document.getElementById("vijay");
       if(idExist){
           idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br> Sleep Time :${text4}`;
       }
    
   } 