function isAdmin() {
  const login = prompt('Enter your email');

  if (login !== 'admin@test.io') {
    return alert('Wrong email!');
  } 

  const password = prompt('Enter your password');

  if (password !== 'admin1234') {
    return alert('Wrong password!')
  } else {
    return alert('Login successful');
  }
}

isAdmin();