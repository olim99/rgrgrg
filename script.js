const button = document.getElementById("send");
const daynight = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")

daynight.addEventListener('click', ()=>{
    if (body.classList.toggle('dark-mode')){
        daynight.textContent = '☀️'
    }else{
        daynight.textContent = '🌙'
    }
});


button.addEventListener('click', ()=>{
    const li = document.createElement("li");
    li.className = 'li-element'
    li.textContent = input.value;


    taskList.appendChild(li)

    const editDelete = document.createElement('div');


    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊'
    editDelete.appendChild(editBtn)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣'
    editDelete.appendChild(deleteBtn)

    li.appendChild(editDelete)

    input.value='';

})
