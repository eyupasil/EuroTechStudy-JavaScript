const btn = document.querySelector('#btn3')
//x.onclick = ()=>{alert("ddddd")}
btn.ondblclick = () => alert("çift tıkladın")
//2 tane method ekleyip ilkinin overrid edildiğini göster.

/**ADD event Listener */ 

btn.addEventListener('click',function(){
    alert(":))")
})
btn.addEventListener('click',function(){
    console.log("İkinci Foknsiyon tetiklendi.");
})
//Mouseover
btn.addEventListener('mouseover',function(){
    btn.innerText = "Tıklayıp durma!"
})
btn.addEventListener('mouseout',function(){
    btn.innerText = "Buton -3"
})
/**Scroll EVENT */
//Scrool event Window ya da textarea içine eklenebilir
// window.addEventListener('scroll',function(){
//    console.log("Scroll tetiklendi");
// })

// KAçan Buton örneği Yap
