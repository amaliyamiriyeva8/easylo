const list=document.querySelector("#list")
const list_item=document.querySelector(".list-item")
const nav=document.querySelector("nav")

list.addEventListener("click",()=>{
  if(list_item.style.display!="block"){
    list_item.style.display="block"
  }
  else{
    list_item.style.display="none"
  }
})

window.addEventListener("scroll",()=>{
 if( window.scrollY>400){
  nav.style.display="block"
  nav.style.transition="all .5s ease"
  nav.style.backgroundColor="#26BE9F"
  nav.style.position="fixed"
  nav.style.top="0"
  nav.style.left="0"
  nav.style.zIndex="1000"
 }
 else{
  nav.style.display=""
  nav.style.transition="all .5s ease"
  nav.style.backgroundColor=""
  nav.style.position = ""
 }
})

const up=document.querySelector("#up")
up.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

window.addEventListener("scroll",()=>{
  if(window.scrollY>500){
    up.style.display="block"
  }
  else{
    up.style.display=""
  }
})
let page=3;
function loadMore(){
const js=document.querySelector(".js")
fetch(`http://localhost:3000/easylo/`)
.then(res=>res.json())
.then(data=>{
  axios.get(`http://localhost:3000/favorites`)
  .then(fav=>{
    data.slice(page-3,page).forEach(element => {
      if(fav.data.find(f=>f.id===element.id)){
        js.innerHTML+=`
        <div class="js-1">
        <i class="bi bi-heart-fill" style="color:red" onClick='DeleteFav(${element.id})'></i>
                        <img src="${element.image}" alt="">
                        <h3>${element.name}</h3>
                        <h2>${element.description_1}</h2>
                        <p>${element.description_2}</p>
                        <button onclick="detailsBtn(${element.id})">Details</button>
                        <button onclick="updateBtn(${element.id})">Update</button>
                        <button onclick="deleteBtn(${element.id})">Delete</button>
                    </div>
        `
      }
      else{
        js.innerHTML+=`
        <div class="js-1">
        <i class="bi bi-heart" onClick='AddFav(${element.id})'></i>
                        <img src="${element.image}" alt="">
                        <h3>${element.name}</h3>
                        <h2>${element.description_1}</h2>
                        <p>${element.description_2}</p>
                        <button onclick="detailsBtn(${element.id})">Details</button>
                        <button onclick="updateBtn(${element.id})">Update</button>
                        <button onclick="deleteBtn(${element.id})">Delete</button>
                    </div>
        `
      }
     
    });
  })
  
})
}

loadMore();
const load=document.querySelector(".loadmore")
load.addEventListener("click",()=>{
  page+=3;
  loadMore();
})

function detailsBtn(id){
   window.location=`details.html?id=${id}`
}
function deleteBtn(id){
  axios.delete(`http://localhost:3000/easylo/${id}`)
  window.location.reload();
}

const add=document.querySelector(".add")
  add.addEventListener("click",()=>{
  window.location="./add.html?id"
  })

  function updateBtn(id){
    window.location=`update.html?id=${id}`
  }
const favclick=document.querySelector(".favClick")
favclick.addEventListener("click",()=>{
  window.location=`favorite.html?id`
})

function AddFav(id){
  fetch(`http://localhost:3000/easylo/${id}`)
  .then(res=>res.json())
  .then(data=>{
    axios.post(`http://localhost:3000/favorites`,data)
  })
}

function DeleteFav(id){
  axios.delete(`http://localhost:3000/favorites/${id}`)
}