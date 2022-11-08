const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('prefers-color-schema:dark').matches;

const iconToggle = () => {
  moon.classList.toggle('display-none');
  sun.classList.toggle('display-none');
};

const checkTheme = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moon.classList.add('display-none');
    return;
  }
  sun.classList.add('display-none');
};

const themeSwitched = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme', 'ligth');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

sun.addEventListener('click', () => {
  themeSwitched();
});
moon.addEventListener('click', () => {
  themeSwitched();
});

checkTheme();
