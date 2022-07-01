// const btn=document.getElementById('map');

// function Click(){
// 	const img = document.createElement('img'); 
// 	img.src = "../static/images/pin1.svg";
// 	img.style.position='relative';
// 	img.style.zIndex="3";
// 	document.body.appendChild(img);
// }

// btn.addEventListener('click',Click);

let i = 0;

let click = document.querySelector('.map');
click.onclick = function(event){
   var x = event.clientX;
   var y = event.clientY;
   const img = document.createElement('img');
   
   img.src = "../static/images/pin1.svg";
   document.body.appendChild(img);
   
   img.style.bottom = String(1000-y)+"px";

   img.style.left = String(x-23)+"px";
   img.style.position='absolute';
   img.style.zIndex="3";
   i = i + 1;
   img.id = "a" + i;
   console.log("a"+i);
}

// if(i>=5){
	let firstImage = document.getElementById("a1");
	let secondImage = document.getElementById("a2");
	firstImage.addEventListener("click", () => {
		firstImage.remove();
	});
	secondImage.addEventListener("click", () => {
		secondImage.remove();
	});
	console.log("삭제됐습니다");
// }
// if(i==5){
// 	for(j=1; j<6; j++){
// 		let selectImage=document.getElementById('"a"+j');
// 		console.log(selectImage);
// 	}
	// selectImage.remove();
	// if (click.onclick== "a"+j){
	// 	("a"+j).remove();
	// }

// }

// function Click(e){
// 	const evt = window.event ? window.event : e;  // 이벤트 받기 (파폭, IE 처리)
 
// 	const img = document.createElement('img');    // 이미지 객채 생성
	

// 	img.src = "../static/images/pin1.svg"// 이미지 경로 설정 (랜덤)
// 	img.style.position = 'relative';
// 	img.style.zIndex=2;
// 	img.style.top = evt.clientY + document.body.scrollTop;
// 	img.style.left = evt.clientX + document.body.scrollLeft;
// 	document.body.appendChild(img);
// }
// document.onclick = Click;







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

