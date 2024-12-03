const minus = document.getElementById("minus");
const add = document.getElementById("add");
const countDisplay = document.getElementById("count");

counter = 0;

function updateCounter(){
    countDisplay.textContent = counter;
}
add.addEventListener("click",()=>{
    counter++;

    updateCounter();
})
minus.addEventListener("click",()=>{
    if(counter>0){
        counter--;
    }
    
    updateCounter();
})
function btn(){
    const cart = document.getElementById("cart-count");
    const button = document.getElementById("shop");
    cart.textContent=counter;



}