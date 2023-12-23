let id=new URLSearchParams(window.location.search).get("id");
const form=document.querySelector("form");
const Mainimage=document.querySelector(".Mainimage")
const name=document.querySelector("#name");
const description_1=document.querySelector("#description-1")
const description_2=document.querySelector("#description-2")
const input=document.querySelector('input[type="file"]')
const image=document.querySelector("#file")

fetch(`http://localhost:3000/easylo/${id}`)
.then(res=>res.json())
.then(data=>{
    Mainimage.src=data.image;
    name.value=data.name;
    description_1.value=data.description_1;
    description_2.value=data.description_2;
    Mainimage.style.width="70px"
    Mainimage.style.height="70px"
})

input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
    Mainimage.src=reader.result;
   
    }
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    axios.patch(`http://localhost:3000/easylo/${id}`,{
        image: Mainimage.src,
        name: name.value,
        description_1:description_1.value,
        description_2:description_2.value,
     })
     .then(res=>{
         window.location="index.html"
     })
})

