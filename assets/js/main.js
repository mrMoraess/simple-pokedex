// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonList = document.getElementById("pokemonList");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const maxRecords = 250;
const limit = 5;
let offset = 0;

// function convertPokemonToHTLM(pokemon) {
//   return ;
// }

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.pokeNumber}</span>
              <span class="name">${pokemon.name}</span>
      
              <div class="details">
                  <ol class="types">
                      ${pokemon.types
                        .map((type) => `<li class="type">${type}</li>`)
                        .join("")}
                  </ol>   
                  <div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}" id="showPokemon">
                  </div>
              </div>
          </li>`
      )
      .join("");
  });
}

loadPokemonItens(offset, limit);

loadMoreBtn.addEventListener("click", () => {
  offset += limit;

  const qtdRecord = offset + limit;

  if (qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreBtn.parentElement.removeChild(loadMoreBtn);
  } else {
    loadPokemonItens(offset, limit);
  }
});

// showPokemon
// adicionar o evento de clique na div pai

// document.addEventListener("click", (event) => {
//     const pokemonView = document.getElementById("pokemonView")
//     if (event.target.id === "showPokemon") {
//         pokemonView.style.display.
//     }
// })