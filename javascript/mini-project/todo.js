let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {
    let item = document.createElement("li");
    console.log(inp.value);
    item.innerText = inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    ul.appendChild(item);
    inp.value = "";
})