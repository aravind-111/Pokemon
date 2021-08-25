async function mockApi() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const details = await data.json();
  for (let i = 0; i < 50; i++) {
    let j = details.results[i].name;
    createProfile(j);
  }
}

// const search_bar = document.createElement('div');
// search_bar.className = 'search_bar container';

// search_bar.innerHTML = `
//   <div class="container" oninput="you_wrote()">
//     <input type="text" id="input_bar" onkeyup="search()" placeholder="Search for Pokémon...">
//   </div>
//   `;

// document.body.append(search_bar);

const whole_container = document.createElement('div');
whole_container.className = 'whole_container container';

async function createProfile(details) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${details}`);
  const pok_details = await data.json();

  const info = document.createElement('div');
  info.className = 'container_pok container';

  info.innerHTML = ` 
    <div class="pic">
        <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok_details.id}.png">
    </div>
    <div class="text-capitalize text">
        <p class="name"><strong>Name&nbsp;&nbsp;&nbsp;: </strong><span class="name_main">${pok_details.name}</span></p>
        <p><strong>Weight&nbsp;: </strong>${pok_details.weight}</p>
        <p><strong>Ability&nbsp;: </strong>${pok_details.abilities[0].ability.name}</p>
        <p><strong>Moves&nbsp;&nbsp;: </strong>${pok_details.moves[0].move.name}</p>
    </div>
    `;
  console.log(pok_details.id);
  whole_container.append(info);
}
document.body.append(whole_container);

// function you_wrote() {
//   var x = document.getElementById('input_bar').value;
//   console.log('you wrote ' + x);
// }

// function search() {
//   var a, b, c, d, e, z, f, g;
//   a = document.getElementById('input_bar');
//   b = a.value.toUpperCase();
//   c = document.getElementsByClassName('whole_container');
//   d = c.getElementsByClassName('container_pok');
//   e = d.getElementsByClassName('text');
//   z = e.getElementsByClassName('name');
//   y = z.getElementsByClassName('name_main');
//   for (i = 0; i < y.length; i++) {
//     f = y[i].getElementsByTagName('p');
//     g = f.textContent || f.innerText;
//     if (g.toUpperCase().indexOf(b) > -1) {
//       y[i].style.display = '';
//     } else {
//       y[i].style.display = 'none';
//     }
//   }
// }

mockApi();
