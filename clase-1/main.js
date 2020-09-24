const axios = require('axios');

//-----stack
// console.log('Hola')
// console.log('Hola')
// console.log('Hola')



// Event loop

// const json = require('./package.json')

// console.log(json)


//----QUIEVE
function sayHi() {
    
}



const searchPokemon = async (param) => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
      console.log(response.data.name)

    } catch (eror) {
        console.log(error.message)
    }
}
searchPokemon('250')


// setTimeout(async () => {

//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

//     console.log(response.data)
//     //data
// }, 1000);
