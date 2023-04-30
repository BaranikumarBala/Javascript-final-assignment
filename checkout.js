var sectioncart = document.getElementById ("cart");
var selectedItem = [localStorage.getItem("cartItem")];
var count = localStorage.getItem("countValue");

console.log(selectedItem);
var selectedCartItem;
document.getElementById("cart-count").innerHTML = count;
document.getElementById("number-of-item").innerHTML = selectedItem.length;


var chttp = new XMLHttpRequest();
chttp.open("GET",selectedItem,true);
chttp.send()

chttp.onreadystatechange = function()
{
  if(chttp.readyState==4 && chttp.status>=200 && chttp.status<300)
  {
    selectedCartItem = JSON.parse(chttp.responseText);
    console.log(selectedCartItem); 

document.querySelector(".item").innerHTML +=
`
<img src="${selectedCartItem.preview}">
    <div class="detail">
      <h3>${selectedCartItem.name}</h3>
        <p>x${count}</p>
        <p>Amount:${addTot()}</p>
    </div>
`
document.getElementById("total-amount").innerHTML = addTot();
  }

function addTot()
{
  var total = count*selectedCartItem.price;
  return total;
}

}