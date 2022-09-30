
const ul = document.querySelector('ul')
const input = document.querySelector('input')
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!this.value) return this.value="";
        else {
        const li = document.createElement('li')
       let val = this.value
       console.log(val);
       const buton = document.createElement('button')
       buton.innerText = 'x'
       buton.classList.add('myButton')
       buton.addEventListener('click',function(e){
        //Direk ilgili elemanı kaldırabilir
            //e.target.parentElement.remove();
            e.target.parentElement.classList.add("completed")
        
    })
      // let button = '<button id="btnSil" class="myButton">x</button>'
      li.append(val)
      li.appendChild(buton);
       ul.append(li)
       //Inputun içini boşaltmak
       this.value = ""
    }
    }});

// Tüm silme butonlarına Add event Lsitener eklenmesi 

// document.addEventListener('click',function(e){
//     if(e.target && e.target.id == "btnSil"){
//         e.target.parentElement.remove();
//     }
// })
