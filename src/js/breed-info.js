import SlimSelect from 'slim-select';

const breedSelectEl = document.querySelector('.breed-select');
const loadingElement = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');

function createOptions(data) {
  data
    .filter(element => element.reference_image_id !== undefined)
    .map(
      element =>
        (breedSelectEl.innerHTML += `<option value="${element.reference_image_id}">${element.name}</option>`)
    );
    breedSelectEl.style.opacity = '1';
  loadingElement.style.opacity = '0';
}

function newSelect() {
 
  new SlimSelect({ select: breedSelectEl });
  breedSelectEl.style.opacity = '1';
}



function createMarkup(data) {
  createOptions(data);
  newSelect();
  
}

function createCardInfo(data) {
  catInfoEl.innerHTML = `
  <div style="display: flex;">
    <div>
      <img src="${data.url}" style="max-width: 300px; max-height: 200px;" />
    </div>
    <div style="padding-left: 20px;">
      <h1 style="font-size: 20px; margin-bottom: 15px; text-align: center; font-family: 'Arial', sans-serif;  animation: textAnimation 2s ease-in-out infinite">${data.breeds[0].name}</h1>
      <p style="font-size: 15px; margin-bottom: 15px;">${data.breeds[0].description}</p>
      <b style="font-size: 18px;">Temperament: </b><span style="font-size: 15px;">${data.breeds[0].temperament}</span>
    </div>
  </div>
`;

catInfoEl.style.cssText = `
  max-width: 800px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgba(255, 165, 0, 0.8);
  background-color: #fff;
  padding: 15px;
  animation: borderAnimation 2s ease-in-out infinite;
`;


  loadingElement.style.opacity = '0';
  
  
}

export { createMarkup, createCardInfo };
