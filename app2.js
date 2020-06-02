
const parentEl = document.querySelector(".parent");

for (let i = 0; i < parentEl.childElementCount; i++) {
    
parentEl.children[i].style.width = (i + 1) * 10 +"px";
parentEl.children[i].style.height = "10px";
parentEl.children[i].style.backgroundColor = "rgb("+(200-i*i)+","+i*i/2+","+i*10+")";


}