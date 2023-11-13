function loadImage() {
    let loader = document.getElementById("loader");
    let image = document.getElementById("dogImage");
    loader.style.display = "block";
    image.style.display = "none";
  
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        loader.style.display = "none";
        image.style.display = "block";
        image.src = data.message;
      })
      .catch(error => console.error(error));
  }
  
  setInterval(loadImage, 10000);
  