function searchPhone() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}
function addcart(){
    let input=document.querySelector("product");
    let li=document.createElement("li");
    li.innerHTML=`${input.h3}   <button onclick="removeToDO(this)">remove</button>  `;
    let ul=document.querySelector("ul");
    ul.prepend(li);
}