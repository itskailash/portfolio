const text = document.querySelector('.animated-text');
let words = ['System Administrator', 'Freelancer', 'DevOps Engineer'];
let i = 0;

setInterval(() => {
  text.textContent = words[i];
  i = (i + 1) % words.length;
}, 3000);
