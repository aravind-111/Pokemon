// const pok_container = document.createElement("div");
// pok_container.setAttribute("class", "container");

// const fetch_pokemons = async() => {
//     for (let i=1; i<=50; i++) {
//         await get_pokemon(i)
//     }
// }
// const get_pokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const array = await fetch(url);   
//     const pokemon = await array.json();
//     for (i=0; i<pokemon.name.length; i++) {
//         console.log(pokemon.name);
//         create_pokemon_card(pokemon.name);
//     }  
// }

// function create_pokemon_card(pokemon) {
//     const pokemon_element = document.createElement("div");
//     pokemon_element.className = "pokemon";

//     pokemon_element.InnerHTML = `
    
//     <h3>Name: ${pokemon}</h3>

//     `;

//     document.body.append(pokemon_element);
// }

// fetch_pokemons();


// async function pokemon_details(pokemon) {
//     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//     const details = await data.json();
//     // console.log(details);
// }


























// async function main_data() {
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=50";
//     const data = await fetch(url);
//     const pokemon_array = await data.json();
//     for (i=0; i<50; i++) {
//         console.log(pokemon_array.results[i].name);
//         // pokemon(pokemon_array.results[i]);
//     }
// }
// main_data();











async function mockApi() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const details = await data.json();
    for (let i = 0; i < 50; i++) {
      let j = details.results[i].name;
      createProfile(j);
    //   console.log(details.results[i]);
    }
    //   details.forEach((element) => createProfile(element));
  }
  async function createProfile(details) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${details}`);
    const pok_details = await data.json();
    const info = document.createElement("div");
    info.className = "container_pok container";
    
    info.innerHTML = `
    <div class="pic">
        <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pok_details.id}.png">
    </div>
    <div class="text container">
        <p><strong>Name&nbsp;&nbsp;&nbsp;: </strong>${pok_details.name}</p>
        <p><strong>Weight&nbsp;: </strong>${pok_details.weight}</p>
        <p><strong>Ability&nbsp;: </strong>${pok_details.abilities[0].ability.name}</p>
        <p><strong>Moves&nbsp;&nbsp;: </strong>${pok_details.moves[0].move.name}</p>
    </div>
    `;
    console.log(pok_details.id);
    document.body.append(info);
        
      }
      mockApi();