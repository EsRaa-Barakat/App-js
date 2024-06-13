let links=document.querySelector("#links");
let userData=document.querySelector(" .UserName");
let  user_info=document.querySelector(" .user_info");
// let getusername=localStorage.getItem ("username")

if(getusername){
    links.remove();
    user_info.style.display="block"
    userData.innerHTML="welcome"+" " +localStorage.getItem ("username")
    
}
let logOut=document.querySelector("#logout")

logOut.addEventListener("click",function(){
    localStorage.clear();
    
    setTimeout(()=>{
        window.location="login.html"
     },1000)

})