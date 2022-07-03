let i = 0;
let click=document.querySelector('.map');


click.onmousedown = function Click(event) {
    if (event.button == 0) {
    // 마우스 왼쪽 클릭

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
      // 마우스 휠클릭
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
  // 키보드 백스페이스 클릭
    if (e.keyCode==8){
        let imgs = document.getElementsByTagName("img");
        document.images[document.images.length-1].remove();
        console.log("성공");
    }
};

Alt.onclick = function(event) {
  // 마우스 왼쪽 + 알트키 클릭
  if (event.altKey && event.button==0) {
    document.title = event.clientX + ", " + event.clientY
    let img = document.createElement("img");
    img.src = "../static/images/선택후오늘이.svg"; 

    img.onload = function (event) {
      img.style.left = img.offsetLeft - img.width / 2 + "px";
      img.style.top = img.offsetTop - img.height / 2 + "px";
    }

    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
    img.style.position = "absolute"
    img.style.width=4+"vh";
    img.style.length=5+"px";


    document.body.appendChild(img);
    i = i + 1;
    img.id = "a" + i;
    img.className='pin';
    console.log(img.id);
  }
};
    
const db1=document.querySelector('#Alt');
  // 컨트롤키+왼쪽마우스
db1.addEventListener('click', function(){
    if (event.button == 0 && event.ctrlKey){
      // if (event.button == 0){
        document.title = event.clientX + ", " + event.clientY;
        let img = document.createElement("img");
        img.src = "../static/images/선택후내일이.svg"; 
        img.onload = function (event) {
          img.style.left = img.offsetLeft - img.width / 2 + "px";
          img.style.top = img.offsetTop - img.height / 2 + "px";
        }
    
        img.style.left = event.clientX + "px";
        img.style.top = event.clientY + "px";
        img.style.position = "absolute";
        img.style.width=4+"vh";
        img.style.length=5+"px";
    
        document.body.appendChild(img);
        i = i + 1;
        img.id = "a" + i;
        console.log(img.id);
      }
    });


// 버튼 클릭시 핀 안뜨기.

 













// const pin = document.querySelector(".pin");
// function pinClick() {
//   pin.classList.toggle("clicked");
//   //clicked라는 css로 왔다갔다
// }






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
