fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    const gallery = data.slice(0, 12);
    const images = gallery.map(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      const div = document.createElement('div');
      div.classList.add('photo');
      div.appendChild(img);
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = photo.title;
      div.appendChild(title);
      return div;
    });
    const container = document.createElement('div');
    container.classList.add('myGallery');
    container.append(...images);
    document.body.appendChild(container);
  });