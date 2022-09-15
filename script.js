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
