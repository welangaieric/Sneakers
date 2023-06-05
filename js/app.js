window.addEventListener('DOMContentLoaded',()=>{
    let toast = document.querySelector('.toast')
    toast.classList.add('show')

    let sec_dis = document.querySelector('#sec')

    let counter = 0;
    
    if(counter<60 ){
        setInterval(()=>{
            if(counter>59 ){
                counter=0
            } 
           sec_dis.innerHTML=`${counter++} s ago`
        },1000 )
        
    }
  let http = new XMLHttpRequest();
  http.open('GET','./data/movies.json',true)
  http.send();
  http.onload = ()=>{
    if(http.status===200){
      let data = http.responseText
      let films= JSON.parse(data)
      displayMovies(films);
      
      // console.log(films)
    }
   
    
   
  }  
  let temp = ''
  let displayMovies = (films)=>{
    for(let film of films){
      temp += `
    <div class="col-md-3 dry mt-3">
      <img src="${film.image}" class="image-responsive img-fluid" alt="">
    </div>
    <div class="col-md-9" >
      <ul class="list-group mt-3">
        <li class="list-group-item bg-dark text-white mt-3">Title: ${film.title} </li>
        <li class="list-group-item bg-dark text-white mt-3">Released: ${film.year}</li>
        <li class="list-group-item bg-dark text-white mt-3">Genre: ${film.genre} </li>
        <li class="list-group-item bg-dark text-white mt-3">Director: ${film.director} </li>
        <li class="list-group-item bg-dark text-white mt-3">Rating: ${film.rating} </li>
        <li class="list-group-item bg-dark text-white mt-3">Plot: ${film.description} </li>
        <li class="list-group-item bg-dark"><button class="btn btn-success"><a class="text-white anc " href="${film.trailer}">Watch Trailer</a></button></li>
      </ul>
    </div>
  `
    }
    document.querySelector('#display').innerHTML=temp;
   
}


})
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const togglescrollTop = function() {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
  window.addEventListener('load', togglescrollTop);
  document.addEventListener('scroll', togglescrollTop);
  scrollTop.addEventListener('click', window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));
}

