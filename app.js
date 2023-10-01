// productAlDetails1
function productAlDetails1(){
    const productName = document.getElementById("productname1");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice1");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}
// productAlDetails2
function productAlDetails2(){
    const productName = document.getElementById("productname2");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice2");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}
// productAlDetails3
function productAlDetails3(){
    const productName = document.getElementById("productname3");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice3");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}
// productAlDetails4
function productAlDetails4(){
    const productName = document.getElementById("productname4");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice4");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}
// productAlDetails5
function productAlDetails5(){
    const productName = document.getElementById("productname5");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice5");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}
// productAlDetails6
function productAlDetails6(){
    const productName = document.getElementById("productname6");
    const productNameAdd = productName.innerText;
    const addlist = document.getElementById("add-product")
    const count = addlist.childElementCount;
    const h = document.createElement('h3');
    h.innerHTML = `${count + 1}. ${productNameAdd}`;
    addlist.appendChild(h);

    const priceProduct = productPriceList("productprice6");
    const totalPrices = productPriceList("total-price");
    const connectPrice = document.getElementById("total-price");
    const totalProductPrices = priceProduct + totalPrices ;
    const totalFiext = totalProductPrices.toFixed(2);
    connectPrice.innerText = totalFiext;
}

function productPriceList(PriceCall){
    const productPrice = document.getElementById(PriceCall);
    const prodactPriceString = productPrice.innerText;
    const priceOfProduct = parseFloat(prodactPriceString);
    return priceOfProduct;
}

document.querySelector("body").addEventListener("click", ()=>{
    const totalAmount = productPriceList("total-price");
    const purchaseButton = document.getElementById("purchase-btn");
    if (totalAmount <= 0) {
        purchaseButton.disabled = true;
      } else {
        purchaseButton.disabled = false;
        purchaseButton.style.backgroundColor="rgb(228, 9, 218)";
        purchaseButton.style.color="white";
      }
      const applyBtn = document.getElementById("applybtn");
      const couponField = document.getElementById("coupon-field");
      if (totalAmount >= 200) {
       couponField.disabled = false;
       applyBtn.disabled = false;
       applyBtn.style.backgroundColor="rgb(228, 9, 218)";
       applyBtn.style.cursor= "pointer"
       applyBtn.style.color="white";  
      }
})

const applyBtn = document.getElementById("applybtn");
applyBtn.addEventListener("click",()=>{
    const couponField = document.getElementById("coupon-field");
    const couponFieldValue = couponField.value;
    // console.log(couponFieldValue)

    if(couponFieldValue == "SELL200"){
        const totalAmount = productPriceList("total-price");
        const finalPrice = document.getElementById("final-price"); 
        const discount =document.getElementById("discount");      
        const newTotal = totalAmount * 0.8;
        var discountAmount = totalAmount - newTotal;
        finalPrice.innerText = newTotal.toFixed(2);
        discount.innerText = discountAmount.toFixed(2);
        return;  
    }
})

document.getElementById("go-home").addEventListener("click", function () {
    var itemList = document.getElementById("add-product");
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    const totalprice = document.getElementById("total-price");
    totalprice.innerText= "00.00"
    const discount = document.getElementById("discount");
    discount.innerText= "00.00"
    const total = document.getElementById("final-price");
    total.innerText= "00.00"
    const couponField = document.getElementById("coupon-field");
    const totalAmount = productPriceList("total-price");
    const applyBtn = document.getElementById("applybtn");
    couponField.value = '';
    if(totalAmount < 199){
        couponField.disabled = true;
        applyBtn.disabled = true;
        applyBtn.style.backgroundColor="rgb(225, 161, 222)";
        applyBtn.style.color="rgb(67, 71, 74)";
    }
    const purchaseButton = document.getElementById("purchase-btn");
    if(totalAmount <= 0){
        purchaseButton.style.backgroundColor="rgb(225, 161, 222)";
    }
  });

