const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
rotateElement(e, pre);
});

function rotateElement(event, element) {
// get mouse position
const x = event.clientX;
const y = event.clientY;
// console.log(x, y)

// find the middle
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;
// console.log(middleX, middleY)

// get offset from middle as a percentage
// and tone it down a little
const offsetX = ((x - middleX) / middleX) * 45;
const offsetY = ((y - middleY) / middleY) * 45;
// console.log(offsetX, offsetY);

// set rotation
element.style.setProperty("--rotateX", offsetX + "deg");
element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
   $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});

var cart = [];
var product;
var totalCost;
function addToCart(productName, productPrice){
    product = {productName, productPrice};
    cart.push(product);
    displayCartList();
    saveOrder();
}
function displayCartList(){
    totalCost=0;
    document.getElementById('cartList').innerHTML="";
    for(var counter=0; counter<cart.length; counter++){
        document.getElementById('cartList').innerHTML+="<li class='list-group-item'><p class='productName'>"+ cart[counter].productName + "</p>Php " + cart[counter].productPrice + "<br><p onclick='removeFromCart("+ counter +")'>Remove from cart</p></li>";
        totalCost+=cart[counter].productPrice;
    }
    document.getElementById('cartList').innerHTML+="<li id='totalCost' class='list-group-item'>Total: Php " + totalCost + "</li>";
}
function removeFromCart(index){
    cart.splice(index, 1);
    displayCartList();
}
function saveOrder(){
    var objectArray = cart.map(prod => ({prod_name: prod.productName, prod_price: prod.productPrice}))
    document.getElementById("cust_order").value = JSON.stringify(objectArray);
}