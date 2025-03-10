let password=document.getElementById('pass')
let btn=document.querySelector("button");
btn.addEventListener("click", ()=>{
    if(btn.innerHTML=="Show"){
        pass.type="text";
        btn.innerHTML="Hide"
    }
    else{
        pass.type="password";
        btn.innerHTML="Show"
    }
})