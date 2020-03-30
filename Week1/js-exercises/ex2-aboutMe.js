/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

// Selected the body tag and put into a variable so I can reuse when using insertBefore
const mainBody = document.querySelector('body');
// Applied style
mainBody.style.fontFamily = 'Arial, sans-serif';
// Changed text content of each list item
document.getElementById('nickname').textContent = 'Anis';
document.getElementById('fav-food').textContent = 'BBQ';
document.getElementById('hometown').textContent = 'Taiz';
// Selected all list items
const listItems = document.querySelectorAll('li');
// Iterated through the list items adding a class to each one
for (let listItem of listItems) {
  listItem.className = 'list-item';
}
// Created an img element
const myPhoto = document.createElement('img');
// Set two attributes to the img ( the width and the src)
myPhoto.setAttribute(
  'src',
  'https://avatars1.githubusercontent.com/u/53934963?s=460&u=47a4aba9a6de4916ec0426380d5f4129a4e8a0d5&v=4',
);
myPhoto.setAttribute('width', '15%');
// Selected the ul for the photo to be inserted before it
const listEl = document.querySelector('ul');
mainBody.insertBefore(myPhoto, listEl);
