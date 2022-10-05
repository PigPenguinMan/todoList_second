const todoBoard = document.querySelector('#todo_Board');
const todoText = document.querySelector('#todo_Text');
const todoBtn = document.querySelector('#todo_Btn');
const todoEnd = document.querySelector('#todo_End');
let todoCount = 0;

todoBtn.addEventListener('click',function(){
    const txt = todoText.value;
    const li = document.createElement('li')
    
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox');
    const textbox = document.createElement('span')
    textbox.innerHTML = txt ;

    const todoStartTime = document.createElement('span');
    todoStartTime.innerHTML = getTime();
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    li.appendChild(checkbox);
    li.appendChild(textbox);
    li.appendChild(todoStartTime);
    li.appendChild(deleteBtn);
    
    todoBoard.appendChild(li);
    li.lastElementChild.classList.add('delete_Btn');

    checkbox.addEventListener("click",todoCheck)
    

    deleteBtn.addEventListener('click',function(e){
        const todoLi =e.target.parentNode 
        todoLi.remove()
        todoCount++;
        todoEnd.innerHTML = `오늘 완료한 일 : ${todoCount} 개`
    })
   
}

)

function todoCheck(e){
    const li = e.target.parentNode;
    if(e.target.checked ){
        li.setAttribute('style','color:black; text-decoration:line-through;')
    }else {
        li.setAttribute('style','color:white');
    }

}

function getTime (){
    let time = new Date();
    let hour = String(time.getHours()).padStart(2,0);
    let minute = String(time.getMinutes()).padStart(2,0);
    let second = String(time.getSeconds()).padStart(2,0);
    
     return `${hour}:${minute}:${second}` ;
    }
