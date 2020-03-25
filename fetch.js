const fetch = require('node-fetch');
// function getUser(url) {
//     return fetch(url)
//     .then((response) => response.json());
//  }

// function getUserAvatar(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//     .then((response) => response.json());
// }

// function createImage(user) {
//     return new Promise((res, rej) => {
//     let img = document.createElement('img');
//     img.src = user.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//     setTimeout(() => {
//       img.remove();
//       res(user); // (**)
//     }, 3000);
// })
// }

// getUser('/article/promise-chaining/user.json')
//     .then(user => getUserAvatar(user.name))
//     .then(createImage)
//     .then(githubUser => alert(`Закончили показ ${githubUser.name}`));

// ----- array of links + Promise.all

// const fetch = require('node-fetch');
// const urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];

//   const requests = urls.map((i) => fetch(i));

//   Promise.all(requests)
//   .then((responses) => responses.forEach(resp => console.info(`${resp.url}: ${resp.status}`)))


//  ----------------array of names - fetch + parse

// const names = ['annaKiniova', 'sagero'];
// const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
// Promise.all(requests)
// .then((responses) => {
//     responses.forEach((result) => {
//         (result.json())
//     .then((person) => console.info(person.name))        
//     })
// })

// ------------------promise All Settled

// const names = ['annaKiniova', 'sagero'];
// const requests = names.map((name) => fetch(`https://api.github.com/users/${name}`));
// Promise.allSettled(requests)
// .then((responses) => responses.forEach((element, index) => {
//     if (element.status === '200') {
//         console.log(element);
//     }
// }))

// let names3 = ['annaKiniova', 'sagero'];
// let requests3 = names3.map((name) => fetch(`https://api.github.com/users/${name}`));
// Promise.allSettled(requests3)
// .then((responses) => responses.forEach((el) => el.json())
// .then(results => results.forEach((element, index) => {
//     if (element.status === 'fulfilled') {
//         console.log(element);
//     }
// })))


// let names3 = ['annaKiniova', 'sagero'];

// Promise.allSettled(names3.map((name) => fetch(`https://api.github.com/users/${name}`)))

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      }
  
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
  try{
    let name = prompt("Введите логин?", "iliakan");
    let user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Полное имя: ${user.name}.`);
        return user;
      })} catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
  demoGithubUser();

