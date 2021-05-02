document.addEventListener('DOMContentLoaded', function(){

  // let data = JSON.parse(localStorage.getItem('item')) || [];
  // let textbox = document.querySelector('#input');

  // document.querySelector('ul').addEventListener();
  // updateList(data);

  // document.getElementById('addBtn').addEventListener('click', function(){
  //   const object = {
  //     id: Date.now(),
  //     content: textbox.value,
  //     checked: false
  //   }
  //   data.push(object);
  //   localStorage.setItem('item', JSON.stringify(data));
  //   updateList(data);
  //   textbox.value = '';
  // });

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

    
  });


  function updateList(itemsList){
    let ul = document.querySelector('ul');
    let html = '';
  
    for(let i = 0; i < itemsList.length; i++){
      let li = document.createElement('li');
      let span = document.createElement('span');
  
      span.textContent = 'x';
      span.classList.add('close');
      
      li.textContent = itemsList[i].content;
      textbox.value = '';
  
      li.appendChild(span); 
      html += li.outerHTML;
    }
  
    ul.innerHTML = ul.innerHTML + html;
  }
  
})