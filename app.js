const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    console.log("YOU MOUSED OVER ME!!")
    btn.style.left = '200px';
    btn.style.top = '100px';
})