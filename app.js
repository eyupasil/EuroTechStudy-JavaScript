const tumLi = document.querySelectorAll('li')

// for (const li of tumLi) {
//     console.log(li.innerText = "GIS")
// }

const renkler = ["blue","red","yellow","green","purple","orchid"]

tumLi.forEach((el) =>{
 el.style.color = renkler[Math.floor(Math.random()*renkler.length)]
// console.log(el.style.color);
})

const header = document.querySelector('h1')
//console.log(getComputedStyle(header));
const h1Styles = getComputedStyle(header)

// h1Styles.color ?
// h1Styles.fontSize ?


/***InsertBefore */
const parentUl = document.querySelector('ul')
undefined
const newLi = document.createElement('li')
undefined
newLi.innerText= "Freshly added"
parentUl.insertBefore(newLi,document.querySelector('li'))

//** InsertAdjacent Element*/

const ilkP = document.querySelector('#firstP')

const italicText = document.createElement('i')

italicText.innerText = "İtalic TExttt"

ilkP.insertAdjacentElement('beforebegin',italicText)

//**RemoveCHILD Element  */

const kaldirilacakLi = document.querySelector('li')
//Silinen elemanı geri döndürdüğü için dizide tutabilirisinz.
const deleted = parentUl.removeChild(kaldirilacakLi)
// REMOVE()
document.querySelector('h1').remove()

//Query bazı elemanları seçmeme
const listItems = document.querySelectorAll('#list li:not([id ="disabled"])')


// Fikstür örneğine bakılabilir. 

//**EVENTSS */
//Şey  	event type 		 the code to run
// Button	click		    change color
// İnput 	hits returnn	get search result
// İmage	mouseover		display image caption
