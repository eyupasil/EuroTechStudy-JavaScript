btn= document.querySelector('button')
btn.addEventListener('mouseover', ()=> {
    const width = Math.floor(Math.random()*window.innerWidth)
    const height = Math.floor(Math.random()*window.innerHeight)
    console.log(width, height);
    btn.style.left = `${width}px`
    btn.style.top = `${height}px`
})