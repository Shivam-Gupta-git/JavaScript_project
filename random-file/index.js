 // let slide = document.querySelectorAll(".slide")


// let count = 0;
// slide.forEach(function(slide, index){
//     slide.style.left = `${index*100}%`
// })
// function next(){
//     count++;
//     if(count == slide.length){
//         count=0
//     }
//     myFun();
// }
// function pre(){
//     count--;
//     if(count == -1){
//         count =  slide.length-1;
//     }
//     myFun()
// }

// function myFun(){
//     slide.forEach((image)=>{
//       image.style.transform = `translateX(-${count * 100}%)`
//     })
// }


let mainbox = document.querySelector(".main-box")
// let slides = document.querySelector(".slides")

let i=0,
j =1,
intervalId;

let myFun = ()=>{
intervalId = setInterval(()=>{
    mainbox.style.rotate = `-${++i*90}deg`;
},2000)

};
myFun();




