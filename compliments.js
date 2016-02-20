var compliments = [
  "You got this.",
  "You are generally well-liked.",
  "You're a winner.",
  "A lot of people look up to you.",
  "I love you.",
  "You deserve a treat.",
  "You look really cute today <3",
  "You're doing such a good job.",
  "You're a real treat."
];

module.exports = {
  getRandomCompliment: function() {
    var randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  }
};
