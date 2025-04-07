// Select the container element where items will be rendered
let itemsContainerElement = document.querySelector('#items-container');

// Prepare innerHTML for all items
let innerHTML = '';
items.forEach((item, itemIndex) => {
    innerHTML += `
    <div class="item-container">
        <div class="image-container" id="image-container-${itemIndex}">
            <div class="image-box">
                <img src="${item.item_image1}" alt="">
            </div>
            <div class="image-box">
                <img src="${item.item_image2}" alt="">
            </div>
            <div class="image-box">
                <img src="${item.item_image3}" alt="">
            </div>
            <div class="image-box">
                <img src="${item.item_image4}" alt="">
            </div>
        </div>

        <div class="button-box" id="button-box-${itemIndex}">
            <!-- Slider buttons will be dynamically added here -->
        </div>

        <a class="wishList-items" href="#">
            <span class="heart-shape">🩷</span><span class="wishList">WISHLIST</span>
        </a>

        <div class="info-container">
            <div class="size-box">
                <span class="product-size">Sizes:</span>
                <span class="product-size-num">${item.product_size_no}</span>
            </div>
            <div class="prise-box">
                <span class="current-prise">Rs. ${item.prise_box.current_prise}</span>
                <span class="original-prise">Rs.${item.prise_box.original_prise}</span>
                <span class="discount">(${item.prise_box.discount}% OFF)</span>
            </div>
        </div>
    </div>`;
});

// Insert all items into the container
itemsContainerElement.innerHTML = innerHTML;

// Loop through each item to set up its slider and buttons
items.forEach((item, itemIndex) => {
    let sliderElements = document.querySelectorAll(`#items-container .item-container:nth-child(${itemIndex + 1}) .image-box`);
    let count = 0;
    let interval = null; // Holds the setInterval ID for auto-sliding

    // Position images in a horizontal row
    sliderElements.forEach((sliderElement, index) => {
        sliderElement.style.left = `${index * 100}%`;
    });

    // Function to update slider position
    function mySlider() {
        sliderElements.forEach((image) => {
            image.style.transform = `translateX(-${count * 100}%)`;
        });
    }

    // Create buttons for the specific item
    let buttonBox = document.querySelector(`#button-box-${itemIndex}`);
    for (let i = 0; i < sliderElements.length; i++) {
        let div = document.createElement('div');
        div.className = 'button';
        buttonBox.appendChild(div);
    }

    // Add event listeners (click and hover) to buttons
    let buttons = buttonBox.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        buttons[0].style.backgroundColor = 'gray'
        // Click event
        button.addEventListener('click', () => {
            buttonColor()
            count = index;
            button.style.backgroundColor = 'gray'
            mySlider();
        });
    });

    // Auto-slide images on hover
    let imageContainer = document.querySelector(`#image-container-${itemIndex}`);
    imageContainer.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            if (count = (count + 1) % sliderElements.length);
            mySlider();
            changeColor();
        }, 1500); // Slide every 1.5 seconds
    });

    // Stop auto-slide on mouse leave
    imageContainer.addEventListener('mouseleave', () => {
        clearInterval(interval);
        count = 0;
        changeColor()
        mySlider()
    });

    // button changing on click
    let buttonColor = () => {
        buttons.forEach((button) => {
            button.style.backgroundColor = 'transparent';
        })
    }
    // button change on slide
    let changeColor = () => {
        buttonColor();
        buttons[count].style.backgroundColor = 'gray'
    }
});

