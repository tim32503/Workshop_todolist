document.addEventListener('DOMContentLoaded', function(){

  // 2 - 刪除功能
  document.querySelectorAll('.close').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.parentElement.remove();
    });
  });

});