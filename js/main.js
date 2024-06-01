var myInput = document.querySelector("input");
var myDelBtn = document.querySelector(".del-btn");
var myEqualBtn = document.querySelector(".btn-special");
var myBtns = document.querySelectorAll(".btn");
var myCBtn = document.querySelector(".my-c");

myBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        myInput.value += e.target.innerHTML;
    })
})

myDelBtn.addEventListener("click", ()=>{
    myInput.value = "";
})

myEqualBtn.addEventListener("click", ()=>{
    if(!isNaN(myInput.value[myInput.value.length - 1]) && !isNaN(myInput.value[0])){
        myInput.value = eval(myInput.value);
    }else {
       myInput.value = myInput.value;
    }
})

myCBtn.addEventListener("click", ()=>{
    myInput.value = myInput.value.slice(0, -1)
})



