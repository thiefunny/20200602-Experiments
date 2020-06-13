//menu

const menuEl = document.querySelector("nav");
menuEl.innerHTML = '<a href="index.html">paseczki jeden</a> <a href="2.html">paseczki dwa</a> <a href="3.html">paseczek ruchomy</a> <a href="4.html">canvas 1</a> <a href="5.html">canvas 2</a> <a href="6.html">canvas 3</a> <a href="7.html">clientXY</a> <a href="8.html">clientXY i ctrlKey</a>';

const bodyEle = document.querySelector("body");
bodyEle.style.fontFamily = "sans-serif";

const styleEl = document.querySelector("style");
styleEl.innerHTML = "* {margin:0; padding:0;} a {color: #fff; opacity:0.3; display: inline-block;    padding: 0.5rem 0.5rem 2rem 0.5rem} ";