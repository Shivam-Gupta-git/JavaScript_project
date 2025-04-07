let slide = document.querySelectorAll("#main-container .box1")

let count = 0;
slide.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
})

function next() {
    count++;
    if (count == slide.length) {
        count = 0
    }
    myFun()
}
function pre() {
    count--;
    if (count == -1) {
        count = slide.length - 1
    }
    myFun()
}

function myFun() {
    slide.forEach((image) => {
        image.style.transform = `translateX(-${count * 100}%)`
    })

}
// setInterval(() => {
//     count++;
//     if (count == slide.length) {
//         count = 0
//     }
//     myFun()
// }, 10000)

let img_boxes = document.querySelectorAll('.img-boxes');

count = 0;
img_boxes.forEach(function(img_boxes, index){
    img_boxes.style.left = `${index * 100}%`
});
function button2(){
    count ++;
    img_boxes.length += 1;
    count = 1;
    imgSlide();
}
function button3(){
    count ++;
    img_boxes.length += 2;
    count = 2;
    imgSlide();
}

function button1(){
    count --;
    img_boxes.length -= 0;
    count = 0; 
    imgSlide();
   
}
function imgSlide(){
    img_boxes.forEach((image)=>{
     image.style.transform = `translateX(-${count * 100}%)`
    })
}


// setInterval(()=>{
//     count ++;
//     if(count == img_boxes.length){
//         count = 0;
//     }
//     imgSlide()
// },2000)
