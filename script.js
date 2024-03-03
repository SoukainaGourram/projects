let newElement = document.querySelector("#new");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let last = 0;
let randomNumber = 0;
let quotes = [
  [
    "Life is a mystery to be experienced, not a problem to be solved.",
    "Gandhi",
  ],
  ["The biggest risk is not taking any risks.", "Mark Zuckerberg"],
  ["Earn your leadership status every day.", "Mickael Jordan"],
  ["Be the change you want to see in the world.", "Gandhi"],
  [
    "Whenever you find yourself on the same side as the majority, it's time to step back and think",
    "Mark Twain",
  ],
  [
    "Only those who take the risk of going too far will discover how far we can go.",
    "T.S Elliot",
  ],
  ["Success is falling seven times, getting up eight.", "Proverbe japonais"],
  [
    "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did. So think outside the box. Set sail. Explore. Dream. Find out.",
    "Mark Twain",
  ],
  ["If you wait to act, all you will gain over time is age.", "Brian Tracy"],
  [
    "When we focus our attention on a single project, the mind is constantly suggesting ideas and improvements that it would miss if it were busy with several projects at the same time.",
    "P.T. Barnum",
  ],
  [
    "Dedicating yourself to doing everything you can to help others get what they want is the key to success.",
    "Brian Sher",
  ],
  [
    "If you think you're too small to make an impact, try going to bed with a mosquito.",
    "Anita Roddick",
  ],
  [
    "Do not judge each day by what you harvest, but by the seeds you sow.",
    "Robert Louis Stevenson",
  ],
  ["Action is the fundamental key to all success.", "Pablo Picasso"],
  [
    "Success is moving from failure to failure while remaining motivated.",
    "Winston Churchill",
  ],
  [
    "Your future is created by what you do today, not tomorrow.",
    "Robert T. Kiyosaki",
  ],
  [
    "Don't be discouraged, it's often the last key in the bunch that opens the door.",
    "Zig Ziglar",
  ],
  [
    "To earn a living, learn at school. To earn a fortune, learn for yourself.",
    "Brian Tracy",
  ],
  ["Winners find ways, losers find excuses…", "F. D. Roosevelt"],
  [
    "You are never too old to set new goals, or make your dreams come true.",
    "C.S. Lewis",
  ],
  [
    "A pessimist sees difficulty in every opportunity. An optimist sees an opportunity in every difficulty.",
    "Winston Churchill",
  ],
];

function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

newElement.addEventListener("click", () => {
  do {
    randomNumber = genererNombreEntier(quotes.length);
  } while (randomNumber == last);

  quote.textContent = quotes[randomNumber][0];
  author.textContent = quotes[randomNumber][1];
  last = randomNumber;
});
