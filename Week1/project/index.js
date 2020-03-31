const quotes = [
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: 'Marilyn Monroe',
  },
  { quote: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch',
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: 'Dr. Seuss',
  },
  { quote: 'Be the change that you wish to see in the world.', author: 'Mahatma Gandhi' },
  { quote: "If you tell the truth, you don't have to remember anything.", author: 'Mark Twain' },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: 'Maya Angelou',
  },
  {
    quote:
      'Don’t walk in front of me… I may not follow \n Don’t walk behind me… I may not lead\n Walk beside me… just be my friend',
    author: 'Albert Camus',
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
];
function generateQuote() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.innerText = `${randomQuote.quote}`;
  quoteAuthor.innerText = `- ${randomQuote.author}`;
}
document.getElementById('quote-button').addEventListener('click', generateQuote);
window.addEventListener('load', generateQuote(quotes));
// generateQuote(quotes);
