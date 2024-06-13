let allProdects=document.querySelector("#prodectsCart")
let prodectInCart=localStorage.getItem("prodectInCart");


if(prodectInCart){
    let item=JSON.parse(prodectInCart)
    drawCartProdects(item)


}
function  drawCartProdects(prodects){
        let y=prodects.map((item)=>{

        return(
          `
          <div class=" container"> 
          <div class="row  ">
         
          <div class="card prodect-item col-lg-4 col-sm-12 " style=" max-width: 14rem;">
          <img src="${item.imageUrl} " class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">product:${item.title}</h5>
            <p class="card-text price_cart"> price: ${item. price}</p>
            <p class="card-text">  category:${item.category}</p>
            </div>
            <div class="Action-cart">
            
            <button class="bnt2 " onClick="removeItem()">Remove</button>
          </div>
        </div>
          </div>
          </div>
          `
        )
       
        })
        allProdects.innerHTML=y.join("")
  }

    //////////////////////////////////////////////////////////////


