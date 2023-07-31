(function() {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
$('document').ready(()=>{
  $('.alert').fadeOut(5000);

  //  animations
  
  const cards= document.querySelectorAll('.prod-card')
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      entry.target.classList.toggle('showw',entry.isIntersecting)
      if(entry.isIntersecting)observer.unobserve(entry.target)
     
    })
  },
    {
      // threshold:1,
    }
  )
  cards.forEach(card=>{
    observer.observe(card)

  })

  $('#change').click(()=>{
    $('p:even').hide(2000)
  })
  $('#change').dblclick(()=>{
    $('.row').css('background-color','yellow')
  })
})

let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}
})()