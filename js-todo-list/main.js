document.addEventListener('DOMContentLoaded', function(){

  // 1 - 標記完成功能
  let checkedFunction = function(e){
    e.target.classList.toggle('checked');
  }

  document.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', checkedFunction);
  });

  // 2 - 刪除功能
  let deleteFunnction = function(e){
    e.target.parentElement.remove();
  }

  document.querySelectorAll('.close').forEach(function(item){
    item.addEventListener('click', deleteFunnction);
  });

  // 3 - 新增功能
  document.getElementById('addBtn').addEventListener('click', function(e){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let text = e.target.previousElementSibling;

    span.textContent = "x";
    span.classList.add('close');
    span.addEventListener('click', deleteFunnction);

    li.textContent = text.value;
    text.value = "";
    li.addEventListener('click', checkedFunction);

    li.appendChild(span); 
    
    e.target.parentElement.nextElementSibling.appendChild(li);
  });

});
