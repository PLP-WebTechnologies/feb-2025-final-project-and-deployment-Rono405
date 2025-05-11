window.onload = () => {
  const theme = localStorage.getItem('theme');
  const name = localStorage.getItem('userName');

  if (theme === 'dark') document.body.classList.add('dark');
  if (name) document.getElementById('userNameDisplay').textContent = `Hello, ${name}!`;
};

document.getElementById('saveNameBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;
  localStorage.setItem('userName', name);
  document.getElementById('userNameDisplay').textContent = `Hello, ${name}!`;
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
