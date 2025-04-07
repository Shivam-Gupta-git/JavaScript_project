let selectFile = document.querySelector('#selectFile')
let selectItems = document.querySelector('#select-items')
let options = document.querySelectorAll('.options')
let list = document.querySelector('#list')

options.forEach((items)=>{
  // console.log(items)
  items.addEventListener('click',()=>{
   selectItems.innerHTML = items.innerHTML;
   list.classList.toggle('hide')
  })
})


selectFile.addEventListener('click',()=>{
 list.classList.toggle('hide')
})