document.addEventListener('DOMContentLoaded', function(){
  // 3 - 新增功能
  let deleteFunnction = function(spanEl){
    spanEl.target.parentElement.remove();
  }
  document.getElementById('addBtn').addEventListener('click', function(e){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let text = e.target.previousElementSibling;

    span.textContent = "x";
    span.classList.add('close');
    span.addEventListener('click', deleteFunnction);

    li.textContent = text.value;
    text.value = "";
    li.addEventListener('click', function(liEl){
      liEl.target.classList.toggle('checked');
    });

    li.appendChild(span); 
    
    e.target.parentElement.nextElementSibling.appendChild(li);
  });

});
