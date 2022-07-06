window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = "skyblue";
    context.lineWidth = 8;
    context.beginPath();

    context.moveTo(75,35);
	  context.lineTo(270,115);
    context.moveTo(75,35);
    context.lineTo(163,140);
    context.stroke();

    
};
document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;
    // 드래그 시작할때
    function handleDragStart(e) {
      this.style.opacity = '0.4';
      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
    // 드래그 끝나고 나면
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
    // 드래그로 안에 들어오면
    function handleDragEnter(e) {
      this.classList.add('over');
    }
    // 드래그로 나가면
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
    // 놔버리면
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('.right .blank');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });