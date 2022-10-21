const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    console.log("YOU MOUSED OVER ME!!");
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * innerWidth);

    btn.style.left = `${width}px`
    btn.style.top = `${height}px`
})

btn.addEventListener('click', function() {
    btn.innerText = "YOU GOT ME!";
    document.body.style.backgroundColor = "green";
})