/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  // Creating the ul element and adding a class to it, some styling, and appending it the body of the page
  const list = document.createElement('ul');
  list.className = 'bookList';
  list.style.listStyle = 'none';
  list.style.display = 'flex';
  list.style.justifyContent = 'space-evenly';
  list.style.flexFlow = 'row wrap';
  document.body.appendChild(list);
  // Adding a a url key with the url of the image cover manually to each object in the books array
  books[0].url =
    'https://images-na.ssl-images-amazon.com/images/I/51MzbjxE7bL._SX376_BO1,204,203,200_.jpg';
  books[1].url = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/7/8/7/9200000000617872.jpg';
  books[2].url = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/4/8/7/9200000033027845.jpg';

  for (let book of books) {
    // Creating the list item
    const bookListItem = document.createElement('li');
    // Adding style to it
    bookListItem.style.width = '400px';
    bookListItem.style.padding = '0.5rem';
    bookListItem.style.margin = '1rem';
    // Creating a paragraph element
    const titleParagraph = document.createElement('p');
    // Adding text content
    titleParagraph.textContent = `${book.title} by ${book.author}`;
    // Creating the img  and the anchor element
    const bookImage = document.createElement('img');
    const imageLink = document.createElement('a');
    // Setting attributes
    bookImage.setAttribute('width', '200px');
    bookImage.setAttribute('src', book.url);
    imageLink.href = book.url;
    // Appending image to the anchor
    imageLink.appendChild(bookImage);
    // Appending the paragraph and anchor to the li
    bookListItem.appendChild(titleParagraph);
    bookListItem.appendChild(imageLink);
    // Checking alreadyRead for the background color
    book.alreadyRead === true
      ? (bookListItem.style.backgroundColor = 'green')
      : (bookListItem.style.backgroundColor = 'red');
    // Appending the li to the ul
    list.appendChild(bookListItem);
  }
  return list;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);

// ----------------------------- Solution 2

/* The function above runs as expected but it seems that there are so much code for the creation of the elments and their styling, which could have been reduced by making css classes with ready styles. Another approach might be to create the li and add innerHTML to it  */
/*
function bookShelf(listOfBooks) {
  const list = document.createElement('ul');
  list.className = 'bookList';
  document.body.appendChild(list);
  // Adding a url key with the url of the image cover manually to each object in the books array
  listOfBooks[0].url =
    'https://images-na.ssl-images-amazon.com/images/I/51MzbjxE7bL._SX376_BO1,204,203,200_.jpg';
  listOfBooks[1].url = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/7/8/7/9200000000617872.jpg';
  listOfBooks[2].url = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/4/8/7/9200000033027845.jpg';
  for (let book of listOfBooks) {
    // Creating the list item
    const bookListItem = document.createElement('li');
    bookListItem.className = 'bookItem ';
    bookListItem.innerHTML = `<p>${book.title} by ${book.author}</p><a href=${
      book.url
    }><img width="200px" src=${book.url}></a>`;
    // Checking alreadyRead for the background color
    book.alreadyRead === true
      ? (bookListItem.className += 'read')
      : (bookListItem.className += 'unread');
    // Appending the li to the ul
    list.appendChild(bookListItem);
    console.log(bookListItem);
  }
}
bookShelf(books);
*/
