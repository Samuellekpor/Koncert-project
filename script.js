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
    artistName: 'Sarah Cole',
    jobDesc: 'Director AEI Group | Consultant SuperCharged Music',
    artistImage: 'images/crew-member1.jpg',
    artistDesc: 'Over 20 years experience in dance music events having promoted some of the UK\'s biggest brands and artists.',
  },
  {
    artistName: 'Rupert Plumb',
    jobDesc: 'Head Of Product Development at AEI Group Ltd',
    artistImage: 'images/crew-member2.jpg',
    artistDesc: 'Specialities: Messenger Bots, Tech and Innovation, Project Management, Community Relations Management, UX, E-commerce, Ticketing',
  },
  {
    artistName: 'Jennifer Cochrane',
    jobDesc: 'Founder at Work Inspired & CO-Founder & CEO Getahead',
    artistImage: 'images/crew-member3.jpg',
    artistDesc: 'Glasgow born and raised Jenni is CEO & Co-Founder of mental health and wellbeing non-profit Getahead, and Founder & CEO of wellbeing consultancy business Work Inspired.',
  },
  {
    artistName: 'Kate Osler',
    jobDesc: 'Managing Director at AEI Group',
    artistImage: 'images/crew-member4.jpg',
    artistDesc: 'Kate is a pleasure to work with; creative, reliable and open to suggestions to market her events and brands in new and exciting ways.',
  },
  {
    artistName: 'Martha Bolton 🤹‍♀️',
    jobDesc: 'Momager @ Not Bad For A Girl, Digital Marketing Manager @ UKF + Drum&BassArena | Music, Marketing and Events',
    artistImage: 'images/crew-member5.jpg',
    artistDesc: 'Advocate for women and non-binary people in music.',
  },
  {
    artistName: 'Oyebambo Ojo',
    jobDesc: 'Marketing Coordinator at AEI Group',
    artistImage: 'images/crew-member6.jpg',
    artistDesc: 'Passionate music lover with a proven history of designing and delivering marketing campaigns that create conversations.',
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
  title.innerHTML = 'Our Team';

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
  });
}

window.addEventListener('load', () => {
  createDom();
});
