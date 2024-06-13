let allProdects=document.querySelector("#prodects")

let prodects=[
    {
      id:1,
      imageUrl:"css/images/photo1.jpg",
      title:"b-hoddy"  ,
      price:"10$",
      category:"fashon",
      quantity:1

    },
    {
        id:2,
        imageUrl:"css/images/photo2.jpg",
        title:"b-blaose"  ,
        price:"15$",
        category:"fashon",
        quantity:1

      },
      {
        id:3,
        imageUrl:"css/images/photo3.jpg",
        title:"w-blaose"  ,
        price:"18$",
        category:"fashon",
        quantity:1

      },
      {
        id:4,
        imageUrl:"css/images/photo4.jpg",
        title:"g-blaose"  ,
        price:"20$",
        category:"fashon",
        quantity:1

      },
      {
        id:5,
        imageUrl:"css/images/photo5.jpg",
        title:"br-blaose"  ,
        price:"20$",
        category:"fashon",
        quantity:1

      }
      ,
      {
        id:6,
        imageUrl:"css/images/photo 6.jpg",
        title:"w-shose"  ,
        price:"25$",
        category:"sports",
        quantity:1

      }
      ,
      {
        id:7,
        imageUrl:"css/images/photo7.jpg",
        title:"shose7"  ,
        price:"28$",
        category:"sports",
        quantity:1

      }
      ,
      {
        id:8,
        imageUrl:"css/images/photo 8.jpg",
        title:"shose8",
        price:"22$",
        category:"sports",
        quantity:1

      }
      ,
      {
        id:9,
        imageUrl:"css/images/photo9.jpg",
        title:"snaker9",
        price:"22$",
        category:"sports",
        quantity:1

      }
      ,
      {
        id:10,
        imageUrl:"css/images/photo_10.jpg",
        title:"snaker10",
        price:"17$",
        category:"sports",
        quantity:1
    
      }
      
     

]

/////////////////////////////////search
let searchBar=document.querySelector(".searchBar");

let searchMood ="tile" ;
function getSearchMood(id){

  if(id=="title"){
    searchMood='title';
    searchBar.placeholder="search By title"

  }
  else{
    searchMood='category'
    searchBar.placeholder="search By category "

  }
  drawItem()

}

// //////////////////////////
function  searchProdects(value){
  let table=""
  if(searchMood=='title'){
    for(let i=0;i<prodects.length;i++){
      if(prodects[i].title.includes(value)){
        table+=
    
        `
        <div class=" container"> 
        <div class="row  ">
        <div class="card prodect-item col-lg-4 col-sm-12 " style=" max-width: 14rem;">
        <img src="${prodects[i].imageUrl} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">product:${prodects[i].title}</h5>
          <p class="card-text"> price: ${prodects[i].price}</p>
          <p class="card-text"> category: ${prodects[i].category}</p>
        </div>
        <div class="Action-cart">
        <button class="addToCart " onClick="addToCart()">addToCart</button>
     
        <i class="fas fa-heart  favorite" onClick="addToFav()" ></i>
        </div>
      </div>
        </div>
        </div>
        `

      }
    }

  }else{
    for(let i=0;i<prodects.length;i++){
      if(prodects[i].category.includes(value)){
        table+=
    
        `
        <div class=" container"> 
        <div class="row  ">
        <div class="card prodect-item col-lg-4 col-sm-12 " style=" max-width: 14rem;">
        <img src="${prodects[i].imageUrl} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">product:${prodects[i].title}</h5>
          <p class="card-text"> price: ${prodects[i].price}</p>
          <p class="card-text"> category: ${prodects[i].category}</p>
         
        </div>
        <div class="Action-cart">
        <button class="addToCart " onClick="addToCart()">addToCart</button>
     
        <i class="fas fa-heart  favorite" onClick="addToFav()" ></i>
        </div>
      </div>
        </div>
        </div>
        `

      }

    }
     
  }
  allProdects.innerHTML=table
}




// ///////////////////////////////////////////////////////
 function drawItem(){ 
    let y=prodects.map((item)=>{
        
        return(
          `
          <div class=" container"> 
          <div class="row  ">
         
          <div class="card prodect-item col-lg-4 col-sm-12 " style=" max-width: 14rem;">
          <img src="${item.imageUrl} " class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">product:${item.title}</h5>
            <p class="card-text"> price: ${item.price}</p>
            <p class="card-text"> category: ${item.category}</p>
            <div class="Action-cart">
            <button class="addToCart " onClick="addToCart(${item.id})">addToCart</button>

         
            <i class="fas fa-heart  favorite" onClick="addToFav(${item.id})" ></i>
            </div>
            
          </div>
        </div>
 
         
          </div>
          </div>
          `
        )
       
    })
    allProdects.innerHTML=y.join("")
 }
 drawItem()
 let getusername=localStorage.getItem("username")
 let addBtn=document.querySelectorAll(".addToCart")
let  items_prodects=document.querySelector(".items_prodects div  ")
let badge=document.querySelector(".badge")
let additem=  localStorage.getItem("prodectInCart")? JSON.parse(localStorage.getItem("prodectInCart")):[];
if(additem){
  additem.map((item)=>{
    items_prodects.innerHTML+=`<p class="show_items">${ item.title}</p>`


  })
  badge.innerHTML=additem.length
}

function addToCart(id){
    if(!getusername){
        setTimeout(()=>{
   window.location="login.html"
},1000)
}
else{
  choosenitem=prodects.find( (item)=>item.id===id )
    items_prodects.innerHTML+=`
    <div class="controlItem">
    <p class="show_items">${ choosenitem.title}</p>
    <div class="changeQuantity">
    <button class="qytBtn" onClick="changeQuantity">-</button>
    <span class="quantity"></span>
    <button class="qytBtn "onClick="changeQuantity()" >+</button>
    </div>
    </div>   

    `

    additem=[... additem, choosenitem];
   localStorage.setItem("prodectInCart", JSON.stringify(additem))

   let  items_prodectsLength=document.querySelectorAll(".items_prodects div  p")
   badge.innerHTML=items_prodectsLength.length;


}
}


// let favitem=[]
function addToFav(id){
  if(!getusername){
    setTimeout(()=>{
window.location="login.html"
},1000)
}else{
   let choosenitem=prodects.find( (item)=>item.id===id )
   additem=[...additem, choosenitem];
 localStorage.setItem("prodectFav",JSON.stringify(additem))
 
}


}

