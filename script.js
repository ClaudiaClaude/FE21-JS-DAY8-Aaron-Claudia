let flowers = [
    { 
    name: "Red flowers",
    price: "4,90",
    qtty: 1,
    img: "https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"
}, {
    name: "Yellow flowers",
    price: "3,90",
    qtty: 1,
    img: "https://images.unsplash.com/photo-1583053693270-e2f1d45cedcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
}, {
    name: "White flowers",
    price: "5,90",
    qtty: 1,
    img: "https://images.unsplash.com/photo-1557925923-6885735abfb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
}]

console.log(flowers)


for (let i = 0; i < flowers.length; i++) {
    document.getElementById("product-container").innerHTML += `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${flowers[i].img}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${flowers[i].name}</h5>
    <p class="card-text">${flowers[i].price} €</p>
    <button class="btn btn-primary addtocart-btn">Add to cart</button>
    </div>
    </div>`
}



let cart = [];

for (let i = 0; i < flowers.length; i++) {
    document.getElementsByClassName("addtocart-btn")[i].addEventListener("click", function(){
        addToCart(i);
    })
}




function addToCart(i) {
    if (cart.qtty)

    cart.push(flowers[i]); 
    printCart(i);

}




function printCart(i) {
document.getElementById("cart-container").innerHTML += `
<div class="row border-top border-bottom">
    <div class="row main align-items-center">
        <div class="col-2"><img class="img-fluid"
                src="${flowers[i].img}">
        </div>
        <div class="col">
            <div class="row text-muted">${flowers[i].name}</div>
            <div class="row">Some flowers</div>
        </div>
        <div class="col"> <span> - </span><span class="product-qtty border"> ${flowers[i].qtty} </span><span> + </span> </div>
        <div class="col">${flowers[i].price} €<span class="close">&#10005;</span></div>
    </div>
</div>`
}

