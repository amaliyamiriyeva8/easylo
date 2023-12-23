let id=new URLSearchParams(window.location.search).get("id");
const js=document.querySelector(".js")

fetch(`http://localhost:3000/favorites/`)
.then(res=>res.json())
.then(data=>{
  data.forEach(element => {
    js.innerHTML+=`
    <div class="js-1">
    <i class="bi bi-heart-fill" style="color:red" onClick='DeleteFav(${element.id})'></i>
                    <img src="${element.image}" alt="">
                    <h3>${element.name}</h3>
                    <h2>${element.description_1}</h2>
                    <p>${element.description_2}</p>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </div>
    `
  });
})

function deleteEl(id){
    axios.delete(`http://localhost:3000/favorites/${id}`)
}

const comeback=document.querySelector(".comeback")
comeback.addEventListener("click",()=>{
    window.location=`index.html?id`
})