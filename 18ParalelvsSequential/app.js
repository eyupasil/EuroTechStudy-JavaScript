/**
 * Bu sefer pokempn apisini kullanacağız.
 * 
 */

async function getPokemon () {
    // const response =await axios.get("https://pokeapi.co/api/v2/pokemon/1")
    // const response2 =await axios.get("https://pokeapi.co/api/v2/pokemon/2")
    // const response3 =await axios.get("https://pokeapi.co/api/v2/pokemon/3") 
    //  console.log(response.data);
    //  console.log(response2.data);
    //  console.log(response3.data);
    //Sonrasında diğer 3 pokemonuda çek
    //Burada akılda tutlması gerekn husus her birinin birbirinin ceabı beklediğidir.
   

//     //Örneğimizde bunları sequential olmasına gerek yok .
//    const response = axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     const response2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
//     const response3 = axios.get("https://pokeapi.co/api/v2/pokemon/3") 
//     await response;
//     await response2;
//     await response3;
//      console.log(response.data);
//      console.log(response2.data);
//      console.log(response3.data);
     // Bunu çalıştıdığımzıda 3 tane undefinied alacağız. 
    // Çünkü artık burdaki responselar sonucu kendisi değil sadece promise lar
     // Kodu düzeltmek için await leri ayrı yerde tanımlarız.
     const response = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const response2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const response3 = axios.get("https://pokeapi.co/api/v2/pokemon/3") 
    console.log(response)
     const poke1 = await response;
     const poke2 =  await response2;
     const poke3 =  await response3;
     console.log(poke1.data);
     console.log(poke2.data);
     console.log(poke3.data);


}

getPokemon()



/**
 * Şimdide async ve paraelle arasındaki farkı görmek için farklı bir örnek yapalım 
 * Sayfasnın body kısmının rengini değiştirelim. 
 */

//  function changeBodyColor(color,delay ) {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             res();
//         }, delay);
//     })
// }

// async function colorShow() {
//     // await changeBodyColor("gray",1000)
//     // await changeBodyColor("green",1000)
//     // await changeBodyColor("indigo",1000)
//     // await changeBodyColor("violet",1000)

//     //**************2222 Aşamada await leri değişeken ara */
//     const col1 = changeBodyColor("gray",1000)
//     const col2 =  changeBodyColor("green",1000)
//     const col3 = changeBodyColor("indigo",1000)
//     const col4 = changeBodyColor("black",1000)

//     await  col1; 
//     await  col2; 
//     await  col3; 
//     await  col4; 



// }
// colorShow()



    /**
     * 3333333333333333
     * Eğer uzun uzadıya böyle yazmak istemezseni 
     */

     async function getPokemon () {
        const response = axios.get("https://pokeapi.co/api/v2/pokemon/1")
        const response2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
        const response3 = axios.get("https://pokeapi.co/api/v2/pokemon/3") 
        // //Alttaki 3 satır comment a alınacak
        //  const poke1 = await response;
        //  const poke2 =  await response2;
        //  const poke3 =  await response3;
        const results = await Promise.all([response,response2,response3])
        console.log(results);
        //Eğer veriyi kullanmak istersek 
        printPokemon(results)
    }
    
    getPokemon()

    function printPokemon(results) {
        for (const pokemon of results) {
            console.log(pokemon.data.name);
        }
    }