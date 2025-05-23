const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container')
function addTask(){
    if(inputBox.value === ''){

        alert('You must write something -_-');
        return;
    } else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00D7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function loadData(){
    listContainer.innerHTML=data=localStorage.getItem('data');
}
loadData();