document.addEventListener('DOMContentLoaded', function(){
  let data = JSON.parse(localStorage.getItem('item')) || [];
  let textbox = document.querySelector('#input');

  document.querySelector('ul').addEventListener();
  updateList(data);

  document.getElementById('addBtn').addEventListener('click', function(){
    const object = {
      id: Date.now(),
      content: textbox.value,
      checked: false
    }
    data.push(object);
    localStorage.setItem('item', JSON.stringify(data));
    updateList(data);
    textbox.value = '';
    
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
  
});

