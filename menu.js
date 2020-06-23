//menu

const menuEl = document.querySelector("nav");
menuEl.innerHTML = '<a class="topmenu" href="index.html">paseczki jeden</a> <a class="topmenu" href="2.html">paseczki dwa</a> <a class="topmenu" href="3.html">paseczek ruchomy</a> <a class="topmenu" href="4.html">canvas 1</a> <a class="topmenu" href="5.html">canvas 2</a> <a class="topmenu" href="6.html">canvas 3</a> <a class="topmenu" href="7.html">clientXY</a> <a class="topmenu" href="8.html">clientXY i ctrlKey</a> <a class="topmenu" href="9.html">krzyż</a> <a class="topmenu" href="10.html">kostka</a> <a class="topmenu" href="11_todolist.html">Todolist</a> <a class="topmenu" href="12.html">Accordion</a>;

const bodyEle = document.querySelector("body");
bodyEle.style.fontFamily = "sans-serif";

const styleEl = document.querySelector("style");
styleEl.innerHTML = " a {color: #fff; opacity:0.3; display: inline-block;    padding: 0.5rem 0.5rem 2rem 0.5rem} ";

// a.topmenu {margin:0; padding:0;}