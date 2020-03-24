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

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];

  let requests = urls.map((i) => fetch(i));

  Promise.all(requests)
  .then((responses) => responses.forEach((resp) => console.info(resp)));
  