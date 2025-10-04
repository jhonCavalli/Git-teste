 const form = document.querySelector("form");
 const container = document.querySelector(".container");

 form.addEventListener("submit", function (event) {
   event.preventDefault();
   const name = form.elements[0].value;
   const email = form.elements[1].value;
   const password = form.elements[2].value;

   const user = {
     name: name,
     email: email,
     password: password,
   };

   container.innerHTML = `
     <h2>Nome: ${user.name}</h2>
     <p>Email: ${user.email}</p>
     <p>Senha: ${user.password}</p>
   `;
 });