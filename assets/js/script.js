
function animateStats() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function togglePricing() {
  document.querySelectorAll('.price').forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');
    price.textContent = price.textContent === monthly ? yearly : monthly;
  });
}

function checkDomain() {
  const input = document.getElementById('domainInput');
  const result = document.getElementById('domainResult');
  if (input.value) {
    result.textContent = `✅ ${input.value}.zyntrihost.com is available!`;
  } else {
    result.textContent = '❌ Please enter a domain name';
  }
}

function generateSubdomain() {
  const username = document.getElementById('subuser').value;
  const output = document.getElementById('subdomainResult');
  if (username) {
    output.textContent = `Your free subdomain: ${username}.zyntrihost.com`;
  } else {
    output.textContent = 'Please enter a username';
  }
}

function login() {
  alert('Login functionality coming soon!');
}

function signUp() {
  alert('Sign-up functionality coming soon!');
}
