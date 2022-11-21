const form = document.querySelector('.login-form');

function handleFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email === '' || password === '') {
    alert(`cncjfjfkg`);
    return;
  }
  const object = {
    email,
    password,
  };
  console.log(object);
  event.target.reset();
}
form.addEventListener('submit', handleFormSubmit);

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя
// поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы
// используй свойство elements.
