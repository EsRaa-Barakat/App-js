let username=document.querySelector(".fristname");
let email=document.querySelector(".email");
let password=document.querySelector(" .password");
let registerBtn=document.querySelector(".btn");
registerBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(username.value===" "|| email.value ===" "||password.value===" "){
        alert('please fill in data')
    }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem(" email", email.value);
        localStorage.setItem("password", password.value)
        setTimeout(()=>{
            window.location="login.html"
        },1000)


    }
})