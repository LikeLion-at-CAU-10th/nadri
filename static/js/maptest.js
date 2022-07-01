let i = 0;

document.onmousedown = function (event) {
    if (event.button == 0) {
      document.title = event.clientX + ", " + event.clientY
      let img = document.createElement("img");
      img.src = "../static/images/오늘이 프로필.svg"; 
  
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
  
    else if (event.button==1){
        document.title = event.clientX + ", " + event.clientY
        let img = document.createElement("img");
        img.src = "../static/images/내일이 프로필.svg"; 
    
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




