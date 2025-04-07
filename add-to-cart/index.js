
let bagItems = [];
onLoad();

function onLoad(){
   let bagItemsStr = bagItems = localStorage.getItem('bagItems');
   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
   displayItemOnHomePage();
   displayBagIcon();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
  displayBagIcon()
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector(".bag-item-count");
    bagItemCountElement.innerText = bagItems.length;
    if(bagItems.length > 0){
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = "visible";
    }
    else{
        bagItemCountElement.style.visibility = "hidden";
    }
}



function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector(".items-container");
     
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = ""
    items.forEach(item=>{
    
        innerHTML +=`<div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="image item">
        <div class="rating">${item.rating.stars}⭐️ | ${item.rating.noOfReviews}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    });
    
    itemsContainerElement.innerHTML = innerHTML;
}
