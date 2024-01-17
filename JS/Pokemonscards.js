const API_URL = `https://pokeapi.co/api/v2`;
const cardsContainer = document.getElementById('cards-container');

const fetchPokemon = async () => {
    try {
        const data = await fetch(`${API_URL}/pokemon?limit=151`);
        const parsedData = await data.json();
        return parsedData.results;
    } catch (error) {
        console.error(error);
    }
}

const getPokemonData = async (pokemonUrl) => {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos del Pokémon:', error);
    }
};

const showPokemonCard = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const name = document.createElement('p');
    name.textContent = `Nombre: ${pokemon.name}`;

    const id = document.createElement('p');
    id.textContent = `ID: ${pokemon.id}`;

    const weight = document.createElement('p');
    weight.textContent = `Peso: ${pokemon.weight} kg`;

    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    image.classList.add('pokemon-img');

    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(weight);
    card.appendChild(image);

    cardsContainer.appendChild(card);
};

