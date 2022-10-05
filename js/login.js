const loginTxt = document.querySelector("#login_Text");
const loginBtn = document.querySelector("#login_Btn");
const loginForm = document.querySelector("#login");
const todoForm = document.querySelector("#todo_Form")
loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    const text = loginTxt.value;
    if (loginTxt == ''){
        alert("닉네임을 입력해주세요");
        return;
    }
    const name = document.querySelector("#name")
    name.innerHTML= `${text}님 반갑습니다 `;
    loginForm.classList.add("hidden");
    todoForm.classList.remove("hidden");
})