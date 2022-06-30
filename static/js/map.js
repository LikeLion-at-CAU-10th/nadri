const btn=document.getElementById('map');

function Click(){
	const img = document.createElement('img'); 
	img.src = "../static/images/pin1.svg";
	document.body.appendChild(img);
	img.style.position='relative';
	img.style.zIndex="3";
}

btn.addEventListener('click',Click);







// const pin = document.querySelector(".pin");
// function pinClick() {
//   pin.classList.toggle("clicked");
// 
// }

// const ma=document.getElementById('map')
// ma.addEventListener('click', function(e){
//   const evt = window.event ? window.event : e;
//   const img=document.createElement("img");
//   img.src = "../static/images/pin1.svg"// 이미지 경로 설정 (랜덤)
//   img.style.position = 'absolute';
//   img.style.top = evt.clientY + document.body.scrollTop;
//   img.style.left = evt.clientX + document.body.scrollLeft;
//   document.body.appendChild(img);
// });
// document.onclick=makeImage;




// function add_img() { 
// 	var img = document.createElement('img'); 
//     img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
// 	document.getElementById('body').appendChild(img);
// }




// function makeImage(e){
//   const evt = window.event ? window.event : e;  // 이벤트 받기 (파폭, IE 처리)

//   const img = document.createElement('img');    // 이미지 객채 생성
  

//   img.src = "../static/images/pin1.svg"// 이미지 경로 설정 (랜덤)
//   img.style.position = 'absolute';
//   img.style.top = evt.clientY + document.body.scrollTop;
//   img.style.left = evt.clientX + document.body.scrollLeft;
//   document.body.appendChild(img);
// }
// document.onclick = makeImage;



// let img= document.createElement("img");
// img.setAttribute("src", "../images/pin\ 1.svg");



// function Init()
// {
//   document.onmousedown=function()
// }

// if (event.button != "1") return;
// let x= event.x;
// let y=event.y;
