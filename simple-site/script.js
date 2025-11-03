document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('nameForm');
  const input = document.getElementById('nameInput');
  const greeting = document.getElementById('greeting');

  const saved = localStorage.getItem('name');
  if (saved) {
    greeting.textContent = `Merhaba, ${saved}!`;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }
    localStorage.setItem('name', name);
    greeting.textContent = `Merhaba, ${name}!`;
    input.value = '';
  });
});