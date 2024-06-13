let email=document.querySelector(".email");
let password=document.querySelector(" .password");
let LoginBtn=document.querySelector("#signIn ");
let getEmail=localStorage.getItem(" email")
let getPassword=localStorage.getItem("password")


LoginBtn.addEventListener("click",function(ele){

    ele.preventDefault()
    if(email.value===""||  password.value===""){
        alert("please fill in data")

    }
    else{
        if( getEmail&& getEmail.trim()=== email.value.trim()&& getPassword&& getPassword.trim()=== password.value.trim()){
            setTimeout(()=>{
                window.location="index.html"
            },1000)
        }
        else{
            alert("email or password is wrong")
        }
    }
})