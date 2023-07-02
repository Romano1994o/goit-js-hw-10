const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
const urlImages = 'https://api.thecatapi.com/v1/images';
const API_KEY  =
  'live_wyfXYpKEWaP95awdsmLyWHA0BWY138tXYi7ns8BW0XKSqKjrC5PBbrFOOXRwUJEN';

function fetchBreeds() {
  return fetch(`${urlBreeds}?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${urlImages}/${breedId}`).then(response => {
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
