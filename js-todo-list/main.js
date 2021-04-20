document.addEventListener('DOMContentLoaded', function(){
  // 1 - 標記完成功能
  document.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    });
  });
  
});