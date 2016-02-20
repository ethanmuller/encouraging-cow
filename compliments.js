var compliments = [
  "You got this",
  "You're even more charming in person",
  "If I could hug you I would",
  "You're so talented",
  "Have you been working out? It looks like it",
  "You are generally well-liked",
  "You're a winner",
  "A lot of people look up to you",
  "I love you",
  "You deserve a treat",
  "I'm glad you're here",
  "You look really cute today <3",
  "People are happier when you're around",
  "You're doing such a good job",
  "You're a real treat"
];

module.exports = {
  getRandomCompliment: function() {
    var randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  }
};
