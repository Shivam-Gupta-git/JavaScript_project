function clickme(smallImg){
  let mainImg = document.querySelector('#main-img')
  mainImg.src = smallImg.src
}


let itemsObject;
onLoadeded()
function onLoadeded(){
  loadItemsElement()
 displayItemElement()
 displayInfoElement()
}

function loadItemsElement(){
itemsObject = itemsElement.map(itemId =>{
  for(let i = 0; i < items.length; i++){
    if(itemId == items[i].id){
      return items[i]
    }
  }
})
// console.log(itemsObject)
}


function displayItemElement(){
  let itemElementContainer = document.querySelector('.items-container');
  let innerHTML = '';
  itemsObject.forEach(itemsElement => {
    innerHTML += generateItemHTML(itemsElement)
  });
  itemElementContainer.innerHTML = innerHTML;
}

function generateItemHTML(item){
return `
<div class="item-container">

<div class="items-box">
  <div class="item1">
    <img src="${item.item_image1}" alt=""
    onclick="clickme(this)"/>
  </div>
  <div class="item1">
    <img src="${item.item_image2}" alt=""
    onclick="clickme(this)"/>
  </div>
  <div class="item1">
    <img src="${item.item_image3}" alt=""
    onclick="clickme(this)"/>
  </div>
  <div class="item1">
    <img src="${item.item_image4}" alt=""
    onclick="clickme(this)"/>
  </div>
</div>
<div class="main-item">
  <img src="${item.item_image1}" alt="" id="main-img"/>
</div>

</div>

`
}

function displayInfoElement(){
  let infoContainerElement = document.querySelector('.infos-container');
  let innerHTML = '';
  itemsObject.forEach(itemsElement =>{
    innerHTML += generateItemmHTML(itemsElement)
  })
   infoContainerElement.innerHTML = innerHTML;
}
function generateItemmHTML(item){
  return `
  <div class="info-container">

  <div class="company-name">${item.companyName}</div>
  <div class="item-name">${item.itemNameLong}</div>
  <div class="size-pannel">
    <span class="size">Size :</span>
    <span class="item-size1"">${item.size.size1}</span>
    <span class="item-size1" >${item.size.size2}</span>
    <span class="item-size1">${item.size.size3}</span>
    <span class="item-size1">${item.size.size4}</span>
  </div>
  <div class="itemSize-and-Qty">
    <span class="item-Qty">
      <span class="size-name">Qty | </span>
      <select name="Qty" id="Qty-list">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    </span>
  </div>
  <div class="rating-box">
    <span class="rating">${item.rating.stars} ⭐️ |</span>
    <span class="rating-count">${item.rating.noOfReviews} Rating</span>
  </div>
    <div class="prise">
      <span class="current-prise">₹${item.price.currentPrise}</span>
      <span class="original-prise">₹${item.price.originalPrise}</span>
      <span class="discount">(${item.price.discount} % OFF)</span>
    </div>
    <div class="taxeHeading">
      <p>inclusive of all taxes</p>
    </div>
    <div class="button-container">
      <button class="bag-button" onClick="addToBag(${item.id})">ADD TO BAG</button>
      <button class="wishlist-button" onClick="addToWishlist(${item.id})"> WISHLIST</button>
    </div>
    <div class="delivery-content">
      <div class="delivery-option">DELIVERY OPTION</div>
      <input type="text" class="pincode-input" placeholder="Enter pincode" />
      <div class="pinNote">Please enter PIN code to check delivery time & Pay on Delivery Availability</div>
    </div>
    <div class="note">100% Original Products</div>
    <div class="note">Pay on delivery might be available</div>
    <div class="note">Easy 7 days returns and exchanges</div>

</div>
  `
}

let sizeChart = document.querySelectorAll('.item-size1');
sizeChart.forEach((sizeElement)=>{
  sizeElement.addEventListener('click',()=>{

    sizeChart.forEach((sizeChartt)=>{
      sizeChartt.style.border = '1px solid black'
    })

    sizeElement.style.border = '2px solid blue'
  })

})
