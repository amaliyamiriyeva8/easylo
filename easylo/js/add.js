const form=document.querySelector("form");
const Mainimage=document.querySelector("#Mainimage")
const name=document.querySelector("#name");
const description_1=document.querySelector("#description-1")
const description_2=document.querySelector("#description-2")
const input=document.querySelector('input[type="file"]')
const image=document.querySelector("#file")

form.addEventListener("submit",(e)=>{
e.preventDefault();
let object={};
let src=image.files[0];
const reader=new FileReader();
reader.onload=(e)=>{
    object={
        image:e.target.result,
        name:name.value,
        description_1:description_1.value,
        description_2:description_2.value,
    }
    axios.post(`http://localhost:3000/easylo/`,object)
}
reader.readAsDataURL(src);
window.location="index.html"
})

input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
    Mainimage.src=reader.result;
    Mainimage.style.width="70px"
    Mainimage.style.height="70px"
    }
    }
})