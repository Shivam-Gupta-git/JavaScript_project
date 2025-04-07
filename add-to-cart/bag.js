let bagItemObjects;
onLoad(); 

function onLoad() {
loadBagItemObjects();
displayBagItems(); 
displayBagSummary();
}

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.summery-container');
  let totalItem = bagItemObjects.length;
  let totalMrp = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  let convenienceFeePrice = 100;

  bagItemObjects.forEach(bagItem =>{
      totalMrp += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
      finalPayment = totalMrp - totalDiscount + convenienceFeePrice;
  })

  bagSummaryElement.innerHTML = `<div class="price-detels">PRICE DETELS <span class="no-of-items">(${totalItem} items)</span></div>
  <div class="total-mrp-container">
      <div class="total-mrp">TOTAL MRP</div>
      <div class="total-mrp-price">Rs${totalMrp}</div>
  </div>
  <div class="discount-mrp-container">
      <div class="discount-mrp">Discount on MRP</div>
      <div class="discount-mrp-price">-Rs${totalDiscount}</div>
  </div>
  <div class="convenience-fee-container">
      <div class="convenience-fee">Conveience Fee</div>
      <div class="convenience-fee-price">Rs ${convenienceFeePrice}</div>
  </div>
  <hr>
  <div class="total-amount-container">
      <div class="total-amount">Total Amount</div>
      <div class="total-amount-price">Rs ${finalPayment}</div>
  </div>
  <button class="place-order">PLACE ORDER</button>
</div>`
}

function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId =>{
    for(let i = 0; i < items.length; i++){
        if(itemId == items[i].id){
         return items[i];
        }
    }
  });
  console.log(bagItemObjects)
}

function displayBagItems() {
    let containerElement = document.querySelector(".bag-items-container");
    let innerHTML = '';
    bagItemObjects .forEach(bagItems => {
        innerHTML += generateItemHTML(bagItems);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}



function generateItemHTML(item) {
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item. delivery_day}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}