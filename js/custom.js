toggleBtn=document.querySelector('.toggleBtn')
const offCanvas = document.querySelector('.offcanvasi')

toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded');
    if (isOpen==='false'){
        toggleBtn.setAttribute('aria-expanded','true');
    }
    else{
        toggleBtn.setAttribute('aria-expanded','false');

    }
    const expand = offCanvas.getAttribute('aria-expanded');

    if (expand==='false'){
        offCanvas.setAttribute('aria-expanded','true');
    }
    else{
        offCanvas.setAttribute('aria-expanded','false');

    }
    
    
   
    

});

let counter = 0;
// quantity selector
let addBtn = document.querySelector('#plus')
addBtn.addEventListener('click',()=>{
    document.querySelector('#display-counter').innerHTML=counter+=1
    
})
let subBtn = document.querySelector('#minus')
subBtn.addEventListener('click',()=>{
    if(counter !== 0)
        document.querySelector('#display-counter').innerHTML=counter-=1
    // console.log(counter+=1)
})

//view cart

let cartBtn = document.querySelector('.cart')
let model = document.querySelector('.model')
cartBtn.addEventListener('click',()=>{
    if(model.classList.contains('show')){
        model.classList.remove('show')
        model.classList.add('hidden')
    }
    else{
        model.classList.add('show')
        model.classList.remove('hidden')


    }
})

//Add to cart 
let addcartBtn = document.querySelector('.submit-btn')
var temp =''
addcartBtn.addEventListener('click',()=>{
  if(counter !== 0){
    temp=`<div class="item">
    <div class="item-image">
      <img src="./images/image-product-1.jpg" alt="">
    </div>
    <div class="item-description">  
      <p>Fall Limited Edition Sneakers<br>$125.00 x${counter} <span style="font-weight: 700;color:#000;"> $${counter*125}.00</span> </p>
    </div>
    <div class="delete-item">
      <img src="./images/icon-delete.svg" alt="">
    </div>
</div>
<button type="button" class="checkBtn"> Checkout</button>`
    document.querySelector('.alerter').style.display='flex'

    setTimeout(()=>{
        document.querySelector('.alerter').style.display='none'

    },4000)


  }
  else{
    temp = `<div class="message">
        <h6>Your cart is empty.</h6>
        
      </div>`
  }
        
    document.querySelector('.model-body').innerHTML=temp
    document.querySelector('.count').innerHTML=counter

    //delete item
   if(counter !==0){
    let deleteBtn = document.querySelector('.delete-item')
    deleteBtn.addEventListener('click',()=>{
        temp = `<div class="message">
        <h6>Your cart is empty.</h6>
        
      </div>`
        document.querySelector('.model-body').innerHTML=temp

       counter=0
       document.querySelector('.count').innerHTML=counter
       document.querySelector('#display-counter').innerHTML=counter
    
    })
}

})

// opening lightbox

let lightbox = document.querySelector('.lightbox-open')
let lightboxClass = document.querySelector('.lightbox')
lightbox.addEventListener('click',()=>{
    lightboxClass.classList.add('lightbox-show')
    lightboxClass.classList.remove('lightbox-hide')


    
})
// closing lightbox

let lightboxclose = document.querySelector('.close-btn')
lightboxclose.addEventListener('click',()=>{
    lightboxClass.classList.add('lightbox-hide')
    lightboxClass.classList.remove('lightbox-show')

    
})
// preloader
let preloader = document.querySelector('.preloader')
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        preloader.style.display = 'none'
        document.querySelector('.main').style.display = 'flex'
    
    
    },1000)
})
;



