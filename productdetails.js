var productData,count=0;
var getCartItem,countVal;
var get_id = localStorage.getItem("id");
var data = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${get_id}`;
var http = new XMLHttpRequest();
http.open("GET",data,true);
http.send()

http.onreadystatechange = function()
{
  if(http.readyState==4 && http.status>=200 && http.status<300)
  {
    productData = JSON.parse(http.responseText);
    console.log(productData);  

  var section = document.getElementById("product");
  var leftDiv = document.createElement("div");
  leftDiv.id = "left-side";
  var rightDiv = document.createElement("div");
  rightDiv.id = "right-side";
  selectedimg = "img0";



  section.appendChild(leftDiv);
  var imgCol = document.createElement("img");
  imgCol.className = "productimg";
  imgCol.src = productData.preview;
  leftDiv.appendChild(imgCol);

  section.appendChild(rightDiv);
  var div1 = document.createElement("div");
  div1.className = "product-description";
  rightDiv.appendChild(div1); 
  var na = document.createElement("h1");
  na.id = "name";
  var nam = document.createTextNode(productData.name);
  na.appendChild(nam);
  div1.appendChild(na);

  var br = document.createElement("h4");
  br.id = "brand";
  var bran = document.createTextNode(productData.brand);
  br.appendChild(bran);
  div1.appendChild(br);

  var rs = document.createElement("h3");
  div1.appendChild(rs);
  var rup = document.createTextNode("Price: Rs ");
  rs.appendChild(rup);
  var pri = document.createElement("span");
  pri.id = "price";
  rs.appendChild(pri);
  var pric = document.createTextNode(productData.price);
  pri.appendChild(pric);

  var des = document.createElement("div");
  des.className = "description";
  div1.appendChild(des);
  var h3 = document.createElement("h3");
  des.appendChild(h3);
  var desc = document.createTextNode("Description");
  des.appendChild(desc);

  var para = document.createElement("p");
  para.id = "description";
  des.appendChild(para);
  var p = document.createTextNode(productData.description);
  para.appendChild(p);

  var propre = document.createElement("div");
  propre.className = "product-preview";
  div1.appendChild(propre);
  var preview = document.createElement("h3");
  propre.appendChild(preview);
  var prev = document.createTextNode("Product Preview");
  preview.appendChild(prev);

  var btnDiv = document.createElement("div");
  btnDiv.className = "btnDiv";
  rightDiv.appendChild(btnDiv);
  var btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = "Add to Cart";
  btnDiv.appendChild(btn);


  var previewImg = document.createElement("div");
  previewImg.className = "previewimg";
  propre.appendChild(previewImg);

  for(var i=0; i<productData.photos.length;i++)
    {
        if(i==0)
        {
          document.querySelector(".previewimg").innerHTML += `<img src = ${productData.photos[i]} class= "imgs active" id="img${i}" onclick = "imgclicked(${i})" />`
        }
        else
        {
          document.querySelector(".previewimg").innerHTML += `<img src = ${productData.photos[i]} class= "imgs" id="img${i}" onclick = "imgclicked(${i})" />`
        }
    }  
    document.querySelector(".btn").addEventListener("click",click);
    
  }  
}

function imgclicked(i)
{
  document.getElementById(selectedimg).classList.remove("active");
  let id = "img"+i;
  selectedimg = id;
  document.getElementById(id).classList.add("active");
  document.querySelector(".productimg").src = productData.photos[i];
}

function click()
{
  count++;
  document.getElementById("cart-count").innerHTML = count;
  recItem(); 
}
function recItem()
{
  getCartItem = data;  
  countVal = count;
  localStorage.setItem("countValue",countVal);
  localStorage.setItem("cartItem",getCartItem);
  return false;
}


