let i = 0;
let buttons = document.querySelectorAll('button');
let input=document.getElementById('search')

document.onmousedown = function Click(event) {
    if (event.button == 0) {
    

      document.title = event.clientX + ", " + event.clientY
      let img = document.createElement("img");
      img.src = "../static/images/오늘이 핀.svg"; 
  
      img.onload = function (event) {
        img.style.left = img.offsetLeft - img.width / 2 + "px";
        img.style.top = img.offsetTop - img.height / 2 + "px";
      }
  
      img.style.left = event.clientX + "px";
      img.style.top = event.clientY + "px";
      img.style.position = "absolute"

      document.body.appendChild(img);
      i = i + 1;
      img.id = "a" + i;
      img.className='pin';
      console.log(img.id);
    }
  
    else if (event.button==1){
        document.title = event.clientX + ", " + event.clientY
        let img = document.createElement("img");
        img.src = "../static/images/내일이 핀.svg"; 
    
        img.onload = function (event) {
          img.style.left = img.offsetLeft - img.width / 2 + "px";
          img.style.top = img.offsetTop - img.height / 2 + "px";
        }
    
        img.style.left = event.clientX + "px";
        img.style.top = event.clientY + "px";
            img.style.position = "absolute"
        
        document.body.appendChild(img);
        i = i + 1;
  	    console.log("a"+i);
      }
    };

document.onkeydown=function onKeyUp(e){
    if (e.keyCode==8){
        let imgs = document.getElementsByTagName("img");
        document.images[document.images.length-1].remove();
        console.log("성공");
    }
};

const pin = document.querySelector(".pin");
function pinClick() {
  pin.classList.toggle("clicked");
  //clicked라는 css로 왔다갔다
}




























// const pin = document.querySelector(".pin");
// const db1=document.querySelector('body1');
// function dblclick(){
// //   if (event.button == 0) { 더블클릭
//      document.title = event.clientX + ", " + event.clientY
//     let img = document.createElement("img");
//     img.src = "../static/images/pin 1.svg"; 

//     img.onload = function (event) {
//       img.style.left = img.offsetLeft - img.width / 2 + "px";
//       img.style.top = img.offsetTop - img.height / 2 + "px";
//     }

//     img.style.left = event.clientX + "px";
//     img.style.top = event.clientY + "px";
//     img.style.position = "absolute"

//     document.body.appendChild(img);
//     i = i + 1;
//     img.id = "a" + i;
//     img.className='pin';
//     console.log(img.id);
  
//   }

//   else if (event.button==1){
//     document.title = event.clientX + ", " + event.clientY
//     let img = document.createElement("img");
//     img.src = "../static/images/pin 2.svg"; 

//     img.onload = function (event) {
//       img.style.left = img.offsetLeft - img.width / 2 + "px";
//       img.style.top = img.offsetTop - img.height / 2 + "px";
//     }

//     img.style.left = event.clientX + "px";
//     img.style.top = event.clientY + "px";
//         img.style.position = "absolute"
    
//     document.body.appendChild(img);
//     i = i + 1;
//     console.log("a"+i);
//   }
// };





// function select(){
//   for(k=1; k<11; k++){
//      let tp=document.getElementById('"a"+i');
//      tp.classList.toggle("clicked");    
//   }
// }


