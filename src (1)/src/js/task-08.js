const form = document.querySelector('.login-form');
const pwd = document.querySelector('input[type="password"]');
const email = document.querySelector(`input[type="email"]`);
const pwdName = pwd.name;
const emailName = email.name;
console.dir(pwd);
form.addEventListener("submit", (event) => {
event.preventDefault();
// console.log(event);
const {
     [emailName]:email, [pwdName]: password 
  } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const object = {
    [email.name]: email.value,
    [password.name] :password.value,

  }
  console.log(object);

event.currentTarget.reset();
})

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя 
// поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы 
// используй свойство elements.