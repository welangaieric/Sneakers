let fetchbtn = document.querySelector('#fetch')
fetchbtn.addEventListener('click',()=>{
    fetchJSON();

})
fetchJSON = ()=>{
    http = new XMLHttpRequest();
    http.open('GET','./data/users.json',true);
    http.send();
    http.onload =()=>{
        if(http.status===200){
            let data = http.responseText;
            let users = JSON.parse(data)
            displayUsers(users);
        }
      
        
    }
}

let displayUsers = (users)=>{
    let temp = ''
    for(let user of users){
       
        temp += ` <ul class="list-group mt-3">
        <li class="list-group-item">
            <div class="profile-pic">
            <img src="${user.profile_pic}" class="responsive-image" alt="">
            </div>
        </li>

        <li class="list-group-item">First Name: ${user.first_name}</li>
        <li class="list-group-item">Last Name: ${user.last_name}</li>
        <li class="list-group-item">Username: ${user.user_name}</li>
        <li class="list-group-item">Email: ${user.first_name}${user.last_name}@gmail.com</li>
        <li class="list-group-item">Phone: ${user.phone}</li>
    </ul>`
   
    
    }
 document.querySelector('#card-body').innerHTML =temp
    
}