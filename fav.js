let prodectFav=localStorage.getItem("prodectFav");
let prodects_fav=document.querySelector("#prodects_fav")
   
if(prodectFav){
  let ele=JSON.parse(prodectFav)
  
  drawFavProdects(ele);
}
function  drawFavProdects(prodects){
let y=prodects.map((item)=>{
    
    return(
      `
      <div class=" container"> 
      <div class="row  ">
     
      <div class="card prodectFav-item col-lg-4 col-sm-12 " style=" max-width: 14rem;">
      <img src="${item.imageUrl} " class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">product:${item.title}</h5>
        <p class="card-text"> price: ${item. price}</p>
        <i class="fas fa-heart favProdect"></i>

        
        </div>
      </div>
    </div>
      </div>
      </div>
      `
    )
   
})
prodects_fav.innerHTML=y.join("")
}
