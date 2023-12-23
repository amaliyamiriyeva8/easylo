let id=new URLSearchParams(window.location.search).get("id");
const js=document.querySelector(".js")
fetch(" http://localhost:3000/easylo/"+id)
.then(res=>res.json())
.then(element=>{
    js.innerHTML+=`
    <div class="js-1">
                    <img src="${element.image}" alt="">
                    <h3>${element.name}</h3>
                    <h2>${element.description_1}</h2>
                    <p>${element.description_2}</p>
                    <button onclick="ComeBack(${element.id})">Come Back</button>
    </div>
    `
  })

  function ComeBack(){
    window.location=`index.html`
  }