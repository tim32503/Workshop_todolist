document.addEventListener('DOMContentLoaded', function(){
  // 1 - 標記完成功能
  document.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    });
  });

  // 2 - 刪除功能
  document.querySelectorAll('.close').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.parentElement.remove();
    });
  });

  document.getElementById('addBtn').addEventListener('click', function(e){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let text = e.target.previousElementSibling;

    span.textContent = "x";
    span.classList.add('close');

    li.textContent = text.value;
    text.value = "";

    li.appendChild(span); 
    document.querySelector('ul').appendChild(li);
  });

  
});