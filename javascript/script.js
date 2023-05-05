const dogImageContainer = document.getElementById("dog-image");

async function getDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const imageUrl = data.message;
  
  dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem de cachorro aleatória">`;
}