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




