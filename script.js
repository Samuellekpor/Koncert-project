const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');
const navBar = document.querySelector('.nav-bar');

toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleBtn.classList.toggle('active');
  navList.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.nav-list>li>a').forEach((n) => n.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  navList.classList.remove('active');
  navBar.classList.remove('active');
}));


const artistObject = [
  {
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
},
{
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
},
{
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
},
{
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
},
{
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
},
{
  artistName : 'Brad Paisley',
  jobDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores.',
  artistImage : 'images/Brad-Paisley.jpg',
  artistDesc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum itaque nisi tempore explicabo dolores vero !'
}];

const ourDomain = document.getElementById('our-domains');

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createDom() {
  const ourArtists = document.createElement('section');
  ourArtists.className = 'our-artists';

  const title = document.createElement('h2');
  title.className = 'artists-title';
  title.innerHTML = 'Our Best Artists';

  const separator = document.createElement('span');
  separator.className = 'separator';

  const artistsSec = document.createElement('div');
  artistsSec.className = 'artists';

  ourArtists.appendChild(title);
  ourArtists.appendChild(separator);
  ourArtists.appendChild(artistsSec);


  Object.keys(artistObject).forEach((key) => {
    const artist = document.createElement('div');
    artist.className = 'artist';

    const image = document.createElement('img');
    image.src = artistObject[key].artistImage;
    image.className = 'artist-image';

    const descContainer = document.createElement('div');
    descContainer.className = 'artist-description';

    const name = document.createElement('h3');
    name.className = 'artist-name';
    name.innerHTML = artistObject[key].artistName;

    const jobDescript = document.createElement('small');
    jobDescript.className = 'job-desc';
    jobDescript.innerHTML = artistObject[key].jobDesc;

    const separator2 = document.createElement('span');
    separator2.className = 'separator2';

    const artistDescript = document.createElement('p');
    artistDescript.className = 'artist-desc';
    artistDescript.innerHTML = artistObject[key].artistDesc;

    artistsSec.appendChild(artist);
    artist.appendChild(image);
    artist.appendChild(descContainer);
    descContainer.appendChild(name);
    descContainer.appendChild(jobDescript);
    descContainer.appendChild(separator2);
    descContainer.appendChild(artistDescript);

    insertAfter(ourDomain, ourArtists);
  })
}

window.addEventListener('load', () => {
  createDom();
});
